import api from '../api/Interceptors';

export const DummyApis = {
  getDummy: () => {
    return api.get('/ditto');
  },
  postDummy: (data) => {
    return api.post('/dummy/post', data);
  },
};