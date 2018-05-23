'use strict';


class File {

  from = '';
  txHash = '';
  time = 0;
  fileName = '';
  fileContnet = '';
  fileRemark = '';

  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.from = o.from;
    this.txHash = o.txHash;
    this.time = o.time;
    this.fileName = o.fileName;
    this.fileContnet = o.fileContnet;
    this.fileRemark = o.fileRemark;
  }

  toString() {
    return JSON.stringify(this);
  }
}


const NasCloud = function () {
  LocalContractStorage.defineMapProperty(this, 'hashMap', {
    parse: function (text) {
      return new File(text);
    },
    stringify: function (o) {
      return o.toString();
    }
  });
  LocalContractStorage.defineMapProperty(this, 'userMap');
};

NasCloud.prototype = {
  init: function () {
  },

  _push(collectionName, key, value) {
    let item = this[collectionName].get(key);
    if (!item) { item = []; }
    item.push(value);
    this[collectionName].put(key, item);
  },

  upload: function (fileName, fileContent, remark) {
    const item = new File();
    item.from = Blockchain.transaction.from;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    item.fileName = fileName;
    item.fileContnet = fileContent;
    item.fileRemark = remark;
    this.hashMap.put(item.txHash, item);
    this._push("userMap", item.from, item);
    return item;
  },

  queryMyFile: function (from) {
    let my = this.userMap.get(from);
    if (!my) {my = [];}
    return my;
  },

  queryFile: function (txHash) {
    let ret = this.hashMap.get(txHash);
    if (!ret) {
      throw new Error("not exits");
    }
    return ret;
  }
};
module.exports = NasCloud;
