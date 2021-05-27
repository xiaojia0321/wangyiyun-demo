import axios from '../axios'



export default {
    login: function (params) {
        return axios({
            url: "/login/cellphone",
            params
        })
    },
    //退出登录
    loginout() {
        return axios({
            url: '/logout'
        })
    },
    //热搜
    getSearch() {
        return axios({
            url: '/search/hot'
        })
    },
    //获取登录状态
    getUserInfo() {
        return axios({
            url: '/login/status'
        })
    }

}