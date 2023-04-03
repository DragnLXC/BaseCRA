import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APP_ENDPOINT || "http://localhost:3000",
  timeout: 100000,
});

const requestHandler = (request) => {
  //handle before sent request
  // Eg: get token...
  // Eg: assign token into request header
  // request.headers = {
  //   Accept: 'application/json',
  //   Authorization: authToken,
  //   'Access-Control-Allow-Origin': '*',
  // };
  return request;
};

const redirectToError = (response) => {
  switch (response?.status) {
    case 401:
      //to do st
      break;
    case 403:
      //to do st
      break;
    case 404:
      //to do st
      break;
    case 503:
      //to do st
      break;
    case 504:
      //to do st
      break;
    default:
      break;
  }
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  const { response } = error;
  redirectToError(response);
  return Promise.reject(error);
};

api.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

api.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error),
);

export default {
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
  patch: api.patch,
};
