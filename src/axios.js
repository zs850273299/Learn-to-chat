import Vue from 'vue';
import axios from 'axios';

axios.defaults.withCredentials=true;
//axios.defaults.baseURL="http://172.163.6.41:3000/"
//axios.defaults.baseURL="http://127.0.0.1:3000/"
//axios.defaults.baseURL="http://192.168.2.143:3000/"
axios.defaults.baseURL="http://39.106.194.51/"

Vue.prototype.axios=axios;