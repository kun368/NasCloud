import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@icedesign/base';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo" style={{}}>
        <Link to="/" className="logo-text">
          <Icon type="similar-product" size="xl"/>&nbsp;星云盘
        </Link>
      </div>
    );
  }
}
