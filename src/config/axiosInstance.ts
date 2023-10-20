export const BASE_URL = 'http://localhost:3000/data';
// import axios from 'axios';

// const logoutAction = () => {};
// const headers = {
//   'Content-Type': 'application/json'
// };

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers
// });

// interface Store {
//   store: string;
// }

// let store: Store;
// export const injectStore = (_store: Store) => {
//   store = _store;
// };

// axiosInstance.interceptors.request.use((config) => {
//   const updatedConfig = { ...config };

//   const { token } = store.getState().auth;
//   if (token) {
//     updatedConfig.headers.Authorization = `Bearer ${token}`;
//   }
//   return updatedConfig;
// });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       store.dispatch(logoutAction());
//     }
//     return Promise.reject(error);
//   }
// );

// export { axiosInstance };
