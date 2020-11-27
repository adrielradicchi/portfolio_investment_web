import axios from "axios";

// axios.defaults.headers.common['Access-Control-Request-Method'] = "POST, GET, PUT, DELETE"

const api = axios.create({
  baseURL: 'http://enigmatic-springs-21467.herokuapp.com/api',
  timeout: 3000,
  headers: {'Content-Type' : 'application/x-www-form-urlencoded', 
             'Common': {
              'Access-Control-Request-Method' : "POST, GET, PUT, DELETE",
              'Access-Control-Allow-Origin': '*'
             }
          } 
});



export default api;