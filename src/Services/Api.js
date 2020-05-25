import axios from 'axios'

export default() => {
    return axios.create({
        //baseURL: `http://constructor.localhost/api`,
        baseURL: `http://l6.localhost/api`,
        withCredentials: false,
    })
}