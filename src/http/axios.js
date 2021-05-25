//封装axios

import axios from 'axios'



const https = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 3000
})




//设置请求拦截器





//设置响应拦截器
https.interceptors.response.use((res) => {
    //后端响应成功
    return res.data
},(err) => {
    console.log(err);
})




export default https