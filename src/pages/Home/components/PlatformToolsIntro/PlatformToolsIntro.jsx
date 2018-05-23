import React, { Component } from 'react';
import { Icon } from '@icedesign/base';

export default class PlatformIntro2 extends Component {
  static displayName = 'PlatformIntro2';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          ...styles.wrapper,
          backgroundImage:
            'url(https://img.alicdn.com/tfs/TB1d..oRVXXXXX4XVXXXXXXXXXX-2760-1480.png)',
        }}
      >
        <div style={styles.body}>
          <h1 style={styles.title}>
            <Icon type="similar-product" size="xxl"/>&nbsp; 星 云 盘
          </h1>
          <p style={styles.text}>
            专注小文件保存<br />
            文件保存在星云区块链上，永不丢失，无法篡改<br />
            人人都可用，随时随地保存和分享文件<br />
            支持任意格式文件存储，无中心机构<br />
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: 500,
    overflow: 'hidden',
  },
  body: {
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
    color: '#000',
    marginBottom: 20,
    marginTop: 150,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: '24px',
    letterSpacing: '2px',
  },
  image: {
    margin: '0 auto',
    marginTop: 50,
    display: 'block',
  },
};
