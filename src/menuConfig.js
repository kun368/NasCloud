// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '反馈',
    path: 'https://github.com/kun368/NasCloud/issues/new',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '开发者主页',
    path: 'http://www.zzkun.com',
    external: true,
    newWindow: true,
    icon: 'yonghu',
  },
  {
    name: '下载Chrome插件',
    path: 'https://github.com/ChengOrangeJu/WebExtensionWallet',
    external: true,
    newWindow: true,
    icon: 'key',
  },
  {
    name: '下载手机版NAS钱包',
    path: 'https://nano.nebulas.io/index_cn.html',
    external: true,
    newWindow: true,
    icon: 'phone',
  },
];

const asideMenuConfig = [
  {
    name: '云盘首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '上传文件',
    path: '/Upload',
    icon: 'content',
  },
  {
    name: '我的云盘',
    path: '/MyCenter/0',
    icon: 'yonghu',
  },
  {
    name: '使用帮助',
    path: '/Help',
    icon: 'location',
  },
];

export { headerMenuConfig, asideMenuConfig };
