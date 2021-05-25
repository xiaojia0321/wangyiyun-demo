import  axios from '../axios'



export default {
    login: function (params) {
        return axios ({
            url: "/login/cellphone",
            params
        })
    }

}