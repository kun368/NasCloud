import NebPay from 'nebpay';
import axios from 'axios';

const nebPay = new NebPay();

const dappAddress = "n1kHuxSdDM22fobU9TSwZ4cb3hrVaD6pkhk";
const netType = "testnet";

export default class NebUtils {

  /**
   * 检查是否安装了插件
   */
  static checkInstalledPlugin = () => {
    return typeof(webExtensionWallet) !== 'undefined';
  };

  /**
   * 插件执行合约
   */
  static pluginCall = (func, args, callback) => {
    window.postMessage({
      'target': 'contentscript',
      'data': {
        'to': dappAddress,
        'value': '0',
        'contract': {
          'function': func,
          'args': args,
        },
      },
      'method': 'neb_sendTransaction',
    }, '*');
    window.addEventListener('message', resp => {
      console.log('response of push: ', resp);
      try {
        const dat = resp.data.data;
        if (!!dat.txhash) {
          console.log('Transaction hash:\n' + JSON.stringify(dat.txhash, null, '\t'));
          if (JSON.stringify(dat).indexOf('Error') === -1) {
            callback(dat.txhash.txhash);
          }
        }
      } catch (e) {
      }
    });
  };

  /**
   * 插件模拟执行合约（test）
   */
  static pluginSimCall = (func, args, errCallback, sucCallback) => {
    nebPay.simulateCall(dappAddress, '0', func, args, {
      qrcode: {
        showQRCode: false,
      },
      listener: (resp) => {
        if (resp.execute_err !== "") {
          errCallback(resp.execute_err);
          return;
        }
        const result = JSON.parse(resp.result);
        sucCallback(result);
      },
    });
  };

  /**
   * 获取插件中已登录的用户地址
   */
  static getPluginUserAddress = (callback) => {
    window.postMessage({
      "target": "contentscript",
      "data": {},
      "method": "getAccount",
    }, "*");
    window.addEventListener('message', function (e) {
      if (e.data && e.data.data) {
        if (e.data.data.account) {
          callback(e.data.data.account);
        }
      }
    });
  };

  /**
   * 创建账户
   */
  static createAccount = () => {
    const nebulas = require("nebulas"),
      Account = nebulas.Account,
      neb = new nebulas.Neb();
    neb.setRequest(new nebulas.HttpRequest(`https://${netType}.nebulas.io`));
    return Account.NewAccount().getAddressString();
  };

  /**
   * 返回调用/user/call的ICE DataBinder参数
   */
  static userCallDataBinder = (func, args, defaultData, dataAdapterFun) => {
    const userAddress = NebUtils.createAccount();
    return {
      url: `https://${netType}.nebulas.io/v1/user/call`,
      method: 'post',
      headers: {'content-type': 'application/json;charset=UTF-8'},
      data: {
        from: userAddress,
        to: dappAddress,
        gasLimit: '2000000',
        gasPrice: '1000000',
        nonce: 0,
        value: '0',
        contract: {
          'args': args,
          'function': func
        }
      },
      responseFormatter: (responseHandler, res, originResponse) => {
        console.log('responseFormatter: ', res, originResponse);
        const isSucc = res.result.execute_err === "";
        res = {
          success: isSucc,
          message: isSucc ? "" : res.result.execute_err,
          data: isSucc ? dataAdapterFun(JSON.parse(res.result.result)) : defaultData,
        };
        responseHandler(res, originResponse);
      },
      defaultBindingData: defaultData
    }
  };

  /**
   * 用Axios调用/user/call
   */
  static userCallAxios = (func, args, sucCallback, errCallback) => {
    const userAddress = NebUtils.createAccount();
    axios.post(`https://${netType}.nebulas.io/v1/user/call`, {
      "from": userAddress,
      "to": dappAddress,
      "value": "0",
      "nonce": 0,
      "gasPrice": "1000000",
      "gasLimit": "2000000",
      "contract": {
        "args": args,
        "function": func,
      }
    }).then(response => {
      const t = response.data.result.result;
      sucCallback(JSON.parse(t));
    }).catch(function (error) {
      console.log(error);
      if (errCallback) {
        errCallback(error);
      }
    });
  };

  /**
   * 轮询交易是否完成
   */
  static intervalQueryTx = (txHash, errCallback, finishCallback) => {
    const intervalQuery = setInterval(function () {
      axios.post(`https://${netType}.nebulas.io/v1/user/getTransactionReceipt`, {
        hash: txHash
      }).then(response => {
        let t = response.data.result.status;
        if (t === 1) {
          clearInterval(intervalQuery);
          finishCallback();
        }
      }).catch(function (error) {
        clearInterval(intervalQuery);
        errCallback(error);
      });
    }, 5000);
  };

}
