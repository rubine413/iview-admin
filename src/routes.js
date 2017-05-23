import Login from './views/Login';
import Index from './views/Index';

export default [{
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/index',
    name: 'index',
    component: Index
}, {
    path: '*',
    redirect: '/login'
}];
