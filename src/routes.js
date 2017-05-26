import Login from './views/Login';
import Index from './views/Index';
import Form from './views/basic/Form';
import Table from './views/basic/Table';
import Icon from './views/basic/Icon';
import Navigation from './views/extend/Navigation';
import Notice from './views/extend/Notice';
import Panel from './views/extend/Panel';
import Progress from './views/extend/Progress';
import Chart from './views/chart/Index';

export default [{
    path: '/',
    name: '基础组件',
    menu: true,
    icon: 'clock',
    component: Index,
    children: [
        { path: 'basic/form', component: Form, name: '表单' },
        { path: 'basic/table', component: Table, name: '表格' },
        { path: 'basic/icon', component: Icon, name: '图标' }
    ]
}, {
    path: '/',
    name: '扩展组件',
    menu: true,
    icon: 'ios-list-outline',
    component: Index,
    children: [
        { path: 'extend/notice', component: Notice, name: '通知提醒' },
        { path: 'extend/panel', component: Panel, name: '面板视图' },
        { path: 'extend/navigation', component: Navigation, name: '菜单导航' },
        { path: 'extend/progress', component: Progress, name: '进度加载' }
    ]
}, {
    path: '/chart',
    name: '图表',
    menu: true,
    icon: 'pie-graph',
    component: Chart
}, {
    path: '/login',
    name: '登陆页',
    component: Login
}, {
    path: '*',
    redirect: '/login'
}];
