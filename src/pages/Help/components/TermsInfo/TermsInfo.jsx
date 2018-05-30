import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Checkbox, Button } from '@icedesign/base';

export default class TermsInfo extends Component {
  static displayName = 'TermsInfo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <h1 style={styles.title}>星云盘系统使用帮助</h1>

        <div style={styles.content}>
          <p style={styles.desc}>
            <span style={styles.importantText}>
              星云盘，可以读做“星云,盘”或者“星,云盘”，是本站推出的在线存储服务，为用户免费提供文件的存储、访问、备份、共享等文件管理等功能。
            </span>
            您可以把网盘看成一个放在网络上的硬盘或U盘，不管你是在家中、单位或其它任何地方，只要你连接到因特网，你就可以管理网盘里的文件。
          </p>
          <p style={styles.desc}>
            <span style={styles.importantText}>
              仅仅在2016年，互联网云盘服务关停风波闹得沸沸扬扬，排名前十的网盘已有7家宣布关闭！
            </span>
            2016年3月，老牌网盘产品115网盘、阿里巴巴旗下的UC网盘相继暂停部分功能。
            4月，微盘宣布将停止普通用户的存储服务，迅雷旗下的快盘也宣布将停止个人用户的存储服务。
            5月，腾讯微云宣布关闭文件中转站功能。
            6月，新浪微盘完全关闭免费个人存储服务，并从宣布当天起逐步关闭微盘分享及搜索等功能。
            10月，360网盘宣布即将关闭所有的云盘账号并清空数据。
          </p>
          <p style={styles.desc}>
            互联网网盘的关停风波闹得沸沸扬扬，是我们重新考虑网盘产品的源头。
            考虑到区块链系统，可以实现永久保存、文件不可篡改、人人可以共享文件等优点，结合优秀的星云区块链智能合约技术，我们开发了“星云盘”。
            <span style={styles.importantText}>
              “星云盘”专注于小文件的保存与分享，专业解决传统网盘系统：限制分享、限制下载速度、随便关停、数据容易丢失的痛点！
            </span>
          </p>
          <p style={styles.desc}>
            简单来讲，我们已采取符合业界最新技术标准（区块链）、合理可行的安全防护措施保护您提供的个人文件安全，防止个人文件遭到修改、损坏或丢失！
          </p>

          <p style={styles.desc}>
            <div style={styles.importantText}>
              如果您在使用“星云盘”时有任何地方需要帮助，可以通过此链接给我们反馈，星云盘团队会在第一时间进行回复：
              <a href="https://github.com/kun368/NasCloud/issues/new" target="_blank">https://github.com/kun368/NasCloud/issues/new</a>
            </div>
          </p>

          <hr/><h1>通过网页版钱包插件使用星云盘：</h1>
          <p style={styles.desc}>
            第一步：推荐下载使用Chrome浏览器，并安装WebExtensionWallet扩展，扩展下载地址：
            <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">
              https://github.com/ChengOrangeJu/WebExtensionWallet
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/82607678.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/81941861.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/66738463.jpg"/>
          </p>
          <p style={styles.desc}>
            第二步，打开本站，点击上传文件按钮：
            <a href="http://nas-cloud.zzkun.com/#/Upload" target="_blank">
              http://nas-cloud.zzkun.com/#/Upload
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/96549416.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/81162205.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/93837322.jpg"/>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/93837322.jpg"/>
          </p>
          <p style={styles.desc}>
            第三步，可以打开“我的云盘”标签，管理自己已经上传的文件：
            <a href="http://10.0.75.1:4444/#/MyCenter/0" target="_blank">
              http://10.0.75.1:4444/#/MyCenter/0
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/18825325.jpg"/>
          </p>

          <hr/><h1>通过移动版手机钱包插件使用星云盘：</h1>
          <p style={styles.desc}>
            第一步，选择文件并上传，弹出扫码窗口
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/52182807.jpg"/>
          </p>
          <p style={styles.desc}>
            第二步，打开星云钱包APP<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/70130081.jpg"/>
          </p>
          <p style={styles.desc}><br/>
            第三步，点击首页的“我要转账”，选择转账方式为：扫码<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/53289110.jpg"/>
          </p>
          <p style={styles.desc}>
            第四步，扫码后，输入密码确认交易，文件开始上链<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/8578306.jpg" />
          </p>
          <p style={styles.desc}>
            第五步，交易后提示发起交易成功<br/>
            <img style={styles.myAutoImgPhone} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/97014788.jpg" />
          </p>
          <p style={styles.desc}>
            第六步，可以打开“我的云盘”标签，管理自己已经上传的文件：
            <a href="http://10.0.75.1:4444/#/MyCenter/0" target="_blank">
              http://10.0.75.1:4444/#/MyCenter/0
            </a>
            <img style={styles.myAutoImg} src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/18825325.jpg"/>
          </p>

        </div>

        <br/>
        <div style={styles.btn}>
          <Button
            type="primary"
            size="large"
            component="a"
            href="/#/"
          >
            开始使用
          </Button>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  desc: {
    fontSize: '14px',
    lineHeight: '28px',
  },
  title: {
    textAlign: 'center',
    margin: 0,
    paddingBottom: '20px',
    fontSize: '20px',
    borderBottom: '1px solid #dedede',
  },
  content: {
    color: '#666',
    fontSize: '16px',
    padding: '20px 0',
    borderBottom: '1px solid #dedede',
  },
  btn: {
    textAlign: 'center',
  },

  importantText: {
    color: '#6633ff',
    fontWeight: 900,
  },
  myAutoImg: {
    backgroundSize: 'contain|cover',
    width: '100%',
    height: 'auto',
    paddingBottom: '20px',
    borderRadius: '5%',
    border: '3px solid burlywood'
  },
  myAutoImgPhone: {
    backgroundSize: 'contain|cover',
    width: '50%',
    height: 'auto',
    paddingBottom: '20px',
    borderRadius: '5%',
    border: '3px solid burlywood',
    textAlign: 'center',
  }
};
