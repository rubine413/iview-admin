import Login from './views/Login';
import Index from './views/Index';
import Form from './views/basic/Form';
import Table from './views/basic/Table';

export default [{
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/index',
    name: 'index',
    component: Index
}, {
    path: '/basic',
    name: '基础组件',
    component: Index,
    children: [
        { path: 'form', component: Form, name: 'Form 表单' },
        { path: 'table', component: Table, name: 'Table 表格' }
    ]
}, {
    path: '*',
    redirect: '/login'
}];
