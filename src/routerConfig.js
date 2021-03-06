// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import Home from './pages/Home';
import Upload from './pages/Upload';
import MyCenter from './pages/MyCenter';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideFooterLayout,
    component: Home,
  },
  {
    path: '/Upload',
    layout: HeaderAsideFooterLayout,
    component: Upload,
  },
  {
    path: '/MyCenter/:txHash',
    layout: HeaderAsideFooterLayout,
    component: MyCenter,
  },
  {
    path: '/Help',
    layout: HeaderAsideFooterLayout,
    component: Help,
  },
  {
    path: '*',
    layout: HeaderAsideFooterLayout,
    component: NotFound,
  },
];

export default routerConfig;
