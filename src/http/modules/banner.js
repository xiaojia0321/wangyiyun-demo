import axios from '../axios'



export default {
    getBanner:function () {
        return axios({
            url:'/banner'
        })
    },
    getRecommendMusic() {
        return axios({
            url:'/personalized'
        })
    }
}