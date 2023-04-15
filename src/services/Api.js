import axios from 'axios'

export default (content_type = 'application/json') => {
    let headers = {
        Accept: 'application/json',
        'Content-Type': content_type,
    }
    
    const Api = axios.create({
        baseURL: "http://old.techwithnick.com/",
        withCredentials: false,
        headers: headers,
    })
    return Api;
}
