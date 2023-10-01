import axios from 'axios';

const BASE_URL  = 'https://hostel-manager.onrender.com/';

const apiClient =  axios.create({
   baseURL: BASE_URL
})

export const registerService = (data) => {
   return apiClient.post('v1/user' , data);
}

export const loginService = (data) => {
   return apiClient.post(`v1/user/sign_in`, data);
}