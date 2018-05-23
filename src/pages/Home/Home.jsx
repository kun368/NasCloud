import React, { Component } from 'react';
import GeneralWidget from "./components/GeneralWidget/GeneralWidget";
import PlatformToolsIntro from "./components/PlatformToolsIntro/PlatformToolsIntro";

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <PlatformToolsIntro/>
        <GeneralWidget/>
      </div>
    );
  }
}
