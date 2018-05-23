import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Feedback, Button } from '@icedesign/base';
import NebUtils from '../../../../util/NebUtils.js'
import {Base64} from 'js-base64';
import {withRouter} from "react-router-dom";


const Toast = Feedback.toast;

@withRouter
export default class SystemNoticeList extends Component {
  static displayName = 'SystemNoticeList';

  constructor(props) {
    super(props);
    this.state = {
      pageTitle: '加载中，请稍候...',
      dataSource: [],
    };
  }

  componentDidMount() {
    const {txHash} = this.props.match.params;
    if (txHash && txHash.length > 10) {
      NebUtils.userCallAxios(
        "queryFile",
        `["${txHash}"]`,
        resp => {
          console.log(resp);
          this.setState({
            pageTitle: `查看/下载星云盘文件`,
            dataSource: [resp],
          })
        },
      );
    }
    else {
      if (!NebUtils.checkInstalledPlugin()) {
        Toast.error('还未安装Chrome扩展，无法查询您的点评信息，请点击页面上方的下载按钮！');
      }
      NebUtils.getPluginUserAddress(addr => {
        NebUtils.userCallAxios(
          "queryMyFile",
          `["${addr}"]`,
          resp => {
            this.setState({
              dataSource: resp.reverse(),
              pageTitle: "我的星云盘文件",
            });
          },
        );
      })
    }
  }

  onDownFileClick(item) {
    console.log('download', item);
    const fileName = Base64.decode(item.fileName);

    const link = document.createElement('a');
    link.download = fileName;
    link.href = item.fileContnet;
    link.appendChild(document.createTextNode("Download Excel"));
    link.click();
  }


  renderItem = (item, idx) => {
    const url = "http://" + window.location.host + "/#/MyCenter/" + item.txHash;

    return (
      <div style={styles.item} key={idx}>
        <ul>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>文件名：</div>
            <div style={styles.detailBody}>{Base64.decode(item.fileName)}</div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>上传者：</div>
            <div style={styles.detailBody}>{item.from}</div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>上传时间：</div>
            <div style={styles.detailBody}>{new Date(item.time).toLocaleString()}</div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>分享链接：</div>
            <div style={styles.detailBody}>
              <a href={url} target="_blank">{url}</a>
            </div>
          </li>
          <li style={styles.detailItem}>
            <div style={styles.detailTitle}>下载：</div>
            <div style={styles.detailBody}>
              <Button
                type="normal"
                size="small"
                onClick={this.onDownFileClick.bind(this, item)}
              >
                点击下载
              </Button>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div className="system-notice-list">
        <IceContainer>
          <div className="notice-list-content">
            <h2 style={styles.title}>{this.state.pageTitle}</h2>
            <div style={styles.noticeList}>
              {this.state.dataSource.length === 0 ? '暂无数据' :
                this.state.dataSource.map((item, idx) => {
                  return this.renderItem(item, idx)
                })}
            </div>
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: '0 0 10px',
    fontSize: '18px',
  },
  noticeList: {
    margin: 0,
    padding: 0,
  },
  paginationWrap: {
    marginTop: '20px',
    textAlign: 'right',
  },
  item: {
    borderBottom: '3px solid #E5E5E5',
    padding: '15px 0',
  },
  detailItem: {
    padding: '8px 0px',
    display: 'flex',
    borderTop: '1px solid #EEEFF3',
  },
  detailTitle: {
    marginRight: '30px',
    textAlign: 'right',
    width: '120px',
    color: '#999999',
  },
  detailBody: {
    flex: 1,
  },
  statusProcessing: {
    color: '#64D874',
  },
};
