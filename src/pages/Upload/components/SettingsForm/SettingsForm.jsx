/* eslint  react/no-string-refs: 0 */
import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Button, Form, Checkbox, Field, Feedback, Notice} from '@icedesign/base';
import ReactFileReader from 'react-file-reader';
import NebUtils from '../../../../util/NebUtils.js'
import {Base64} from 'js-base64';
import './SettingsForm.scss';


const Toast = Feedback.toast;
const FormItem = Form.Item;

export default class SettingsForm extends Component {
  static displayName = 'SettingsForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.field = new Field(this);
    this.state = {
      fileName: '',
      fileBase64: '',
      prompt: '',
      succTxHash: '',
    }
  }

  handleSubmit() {
    const remark = this.field.getValues().remark;
    if (this.state.fileBase64 === '' || this.state.fileName === '') {
      Toast.error("请先上传文件！");
      return;
    }
    if (!NebUtils.checkInstalledPlugin()) {
      Toast.error('还未安装Chrome扩展，请点击页面上方的下载按钮');
    }
    const contract = {
      function: 'upload',
      args: `["${Base64.encode(this.state.fileName)}", 
                "${this.state.fileBase64}", "${Base64.encode(remark)}"]`,
    };
    NebUtils.pluginCall(contract.function, contract.args, (txHash) => {
      // Toast.success("已提交交易，交易成功即上传星云盘成功！");
      this.setState({
        succTxHash: txHash,
      })
    });
  }

  handleFiles = files => {
    console.log(files);
    this.setState({
      fileName: files.fileList[0].name,
      fileBase64: files.base64,
      prompt: `已选择文件：${files.fileList[0].name} （大小：${files.fileList[0].size}B）`
    })
  };

  renderSuccPrompt() {
    if (this.state.succTxHash === '') {
      return;
    }
    const url = "http://" + window.location.host + "/#/See/" + this.state.succTxHash;
    return (
      <div style={{paddingBottom: '15px'}}>
        <Notice
          className="custom"
          closable
          iconType="success"
          title={
            <span>
              已为您星云盘文件下载/分享链接，交易成功后可用
              &nbsp;&nbsp;&nbsp;
              <Button
                type="secondary"
                component="a"
                size="small"
                href={url}
                target="_blank"
              >
              <span>GO ></span>
              </Button>
            </span>
          }
        />
      </div>
    )
  }

  render() {
    const init = this.field.init;
    const formItemLayout = {
      labelCol: {
        fixedSpan: 10
      },
      wrapperCol: {
        span: 14
      }
    };

    return (
      <IceContainer>
        {this.renderSuccPrompt()}

        <h1 style={styles.title}>上传文件到星云盘</h1>

        <div style={styles.content}>
          <Form direction="ver" field={this.field}>

            <FormItem label="文件：" {...formItemLayout}>
              <ReactFileReader
                fileTypes="*"
                handleFiles={this.handleFiles}
                base64={true}
                multipleFiles={false}
              >
                <div>
                  <Button type="normal">点击上传</Button>
                  <p>{this.state.prompt}</p>
                </div>
              </ReactFileReader>
            </FormItem>

            <FormItem label="备注：" {...formItemLayout}>
              <Input multiple  {...init("remark")} rows={8}/>
            </FormItem>

            <FormItem label=" " {...formItemLayout}>
              <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                提交
              </Button>
            </FormItem>
          </Form>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
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
};
