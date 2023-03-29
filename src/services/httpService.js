import axios from "axios";

axios.interceptors.response.use(null,error=>{
    let expectedError=error.response && error.response.status>=400 && error.response.status<500
    if(!expectedError) console.log("Unexpected")
    return Promise.reject(error)
})
export default {
    get:axios.get
}