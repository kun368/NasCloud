import React, { Component } from 'react';
import GeneralWidget from "./components/GeneralWidget/GeneralWidget";
import PlatformToolsIntro from "./components/PlatformToolsIntro/PlatformToolsIntro";
import { Dialog } from '@icedesign/base';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      welcomeDialogShow: true,
    }
  }

  onWelcomeDialogClose = () => {
    this.setState({
      welcomeDialogShow: false
    });
  };

  renderWelcomeDialog() {
    return (
      <Dialog
        visible={this.state.welcomeDialogShow}
        onOk={this.onWelcomeDialogClose}
        closable="esc,mask,close"
        onCancel={this.onWelcomeDialogClose}
        onClose={this.onWelcomeDialogClose}
        title="欢迎使用星云盘！"
      >
        <p style={{color: 'red'}}>星云盘跨平台网盘新版本隆重上线，率先支持四种使用方式，并添加详细的使用帮助！</p>
        <ul>
          <li>方法一. Chrome浏览器打开星云盘，安装WebExtensionWallet扩展，使用扩展本身交易</li>
          <li>方法二. Chrome浏览器打开星云盘，安装WebExtensionWallet扩展，手机扫码交易</li>
          <li>方法三. 手机/平板浏览器打开星云盘，上传文件时自动调用钱包交易（只需要安装NAS手机钱包）</li>
          <li>方法四. 直接在NAS手机钱包DApp市场里选择本应用使用</li>
        </ul>
        <p style={{color: 'red'}}>星云盘，做专注于小文件保存与分享的跨平台安全网盘！</p>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="home-page">
        {this.renderWelcomeDialog()}
        <PlatformToolsIntro/>
        <GeneralWidget/>
      </div>
    );
  }
}
