import axios from 'axios';

function getIRequestProp() {
  return {
    requestHeader: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Accept-Language': 'en'
    }
  };
}

async function get(url, parameter) {
  const {requestHeader} = getIRequestProp();
  return axios.get(url, {
    params: parameter,
    headers: requestHeader
  });
}
async function post(url, body) {
  const {requestHeader} = getIRequestProp();
  return axios.post(url, body, {
    headers: requestHeader
  });
}

const AxiosServices = {
  get,
  post
};
export default AxiosServices;
