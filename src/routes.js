import Login from './views/login';
import Main from './views/main';
import Form from './views/basic/form';
import Table from './views/basic/table';
import Icon from './views/basic/icon';
import Navigation from './views/extend/navigation';
import Notice from './views/extend/notice';
import Panel from './views/extend/panel';
import Progress from './views/extend/progress';
import Echarts from './views/chart/echarts';

export default [{
    path: '/',
    name: '基础组件',
    menu: true,
    submenu: true,    
    icon: 'clock',
    component: Main,
    children: [
        { path: 'basic/form', component: Form, name: '表单' },
        { path: 'basic/table', component: Table, name: '表格' },
        { path: 'basic/icon', component: Icon, name: '图标' }
    ]
}, {
    path: '/',
    name: '扩展组件',
    menu: true,    
    submenu: true,
    icon: 'ios-list-outline',
    component: Main,
    children: [
        { path: 'extend/notice', component: Notice, name: '通知提醒' },
        { path: 'extend/panel', component: Panel, name: '面板视图' },
        { path: 'extend/navigation', component: Navigation, name: '菜单导航' },
        { path: 'extend/progress', component: Progress, name: '进度加载' }
    ]
}, {
    path: '/',
    name: '图表',
    menu: true,
    icon: 'pie-graph',
    component: Main,
    children: [
        { path: 'echarts', component: Echarts, name: 'echarts' }
    ]
}, {
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '*',
    redirect: '/login'
}];
