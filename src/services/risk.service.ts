import axios from 'axios';

var AxioInstance=axios.create({
  baseURL:"http://localhost:8000/api"
});


export default AxioInstance;
