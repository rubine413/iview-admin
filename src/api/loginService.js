import http from './base';

export default {
    /**
     * 用户登陆
     * @param  {String} loginName  登录名
     * @param  {String} password   密码
     * @param  {Number} rememberMe 记住用户(0-不记住, 1-记住)
     * @param  {Number} autologin  自动登陆(0-不自动, 1-自动)
     * @return {JSON}            返回信息
     */
    login: (loginName, password, rememberMe, autologin) => http.post('login', {
        loginName,
        password,
        rememberMe,
        autologin
    })
};
