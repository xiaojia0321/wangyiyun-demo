import axios from '../axios'



export default {
    getBanner: function () {
        return axios({
            url: '/banner'
        })
    },
    getRecommendMusic() {
        return axios({
            url: '/personalized'
        })
    },
    //独家放送
    getPersonList() {
        return axios({
            url: '/personalized/privatecontent'
        })
    },
    //最新音乐
    getNewMusic() {
        return axios({
            url: '/personalized/newsong',
            params: {
                limit: 12
            }
        })
    },
    //推荐mv
    getMv() {
        return axios({
            url: '/personalized/mv',
           
        })
    }
}