import axios from 'axios';
const Api = axios.create({baseURL: 'http://localhost:3002/'});
export default Api;