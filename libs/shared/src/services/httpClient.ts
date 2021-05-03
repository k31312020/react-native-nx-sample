import axios from 'axios';
import {BASE_URL} from '@env';

const instance = axios.create({
    baseURL: BASE_URL
});

instance.interceptors.request.use(req => {
    //add token to headers here
    return req;
   },error=>{
    return Promise.reject(error);
   }
);


export default instance;