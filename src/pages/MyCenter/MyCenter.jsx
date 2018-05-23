import React, { Component } from 'react';
import SystemNoticeList from './components/SystemNoticeList';

export default class MyCenter extends Component {
  static displayName = 'MyCenter';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="my-center-page">
        <SystemNoticeList />
      </div>
    );
  }
}
