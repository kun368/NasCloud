import React, { Component } from 'react';
import SettingsForm from './components/SettingsForm';

export default class Upload extends Component {
  static displayName = 'Upload';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="upload-page">
        <SettingsForm />
      </div>
    );
  }
}
