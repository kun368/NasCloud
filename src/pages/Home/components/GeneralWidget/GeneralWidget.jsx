import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Icon } from '@icedesign/base';

const { Row, Col } = Grid;

export default class GeneralWidget extends Component {
  static displayName = 'GeneralWidget';

  render() {
    return (
      <IceContainer title="常用场景">
        <Row wrap>
          <Col l="8" xxs="12" style={styles.widgetItem}>
            <a style={styles.widgetLink}>
              <Icon type="form" size="xl" />
              <span style={styles.widgetName}>代码保存分享</span>
            </a>
          </Col>
          <Col l="8" xxs="12" style={styles.widgetItem}>
            <a style={styles.widgetLink}>
              <Icon type="nav-list" size="xl" />
              <span style={styles.widgetName}>Markdown文章保存分享</span>
            </a>
          </Col>
          <Col l="8" xxs="12" style={styles.widgetItem}>
            <a style={styles.widgetLink}>
              <Icon type="picture" size="xl" />
              <span style={styles.widgetName}>压缩图片保存分享</span>
            </a>
          </Col>
          <Col l="8" xxs="12" style={styles.widgetItem}>
            <a style={styles.widgetLink}>
              <Icon type="image-text" size="xl" />
              <span style={styles.widgetName}>情书、日记保存分享</span>
            </a>
          </Col>
          <Col l="8" xxs="12" style={styles.widgetItem}>
            <a style={styles.widgetLink}>
              <Icon type="mobile-phone" size="xl" />
              <span style={styles.widgetName}>小说TXT保存分享</span>
            </a>
          </Col>
          <Col l="8" xxs="12" style={styles.widgetItem}>
            <a style={styles.widgetLink}>
              <Icon type="all" size="xl" />
              <span style={styles.widgetName}>支持所有文件类型...</span>
            </a>
          </Col>
        </Row>
      </IceContainer>
    );
  }
}

const styles = {
  widgetItem: {
    margin: '12px 0',
  },
  widgetLink: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#666',
    marginLeft: '20px',
  },
  widgetImg: {
    width: '30px',
    height: '30px',
  },
  widgetName: {
    marginLeft: '10px',
  },
};
