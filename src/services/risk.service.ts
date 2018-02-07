import axios from 'axios';

var AxioInstance=axios.create({
  baseURL:"https://britecore-backend.herokuapp.com/api/"
});


export default AxioInstance;
