import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL  = 'https://hostel-manager.onrender.com/v1/';

const apiClient =  axios.create({
   baseURL: BASE_URL,
   headers: {
      'Accept': 'application/json',
      "Content-Type": 'application/json',
   }
})

apiClient.interceptors.response.use(
   (response) => response,
   (error) => {
      if(!error.response){
         toast.warning("Network Error: Please check your internet connection");
      }
      return Promise.reject(error);
   }
)


export const registerService = (data) => {
   return apiClient.post('user' , data);
}
export const loginService = (data) => {
   return apiClient.post(`user/sign_in`, data);
}
export const otpService = (data) => {
   return apiClient.patch('user/verify-account', data)
}
export const resendOtpService = (data) => {
   return apiClient.get(`user/resend-otp?email=${data.email}`)
}
export const verifyPasswordOtpService = (data) => {
   return apiClient.patch('user/verify-otp', data)
}
export const resetPasswordService = (data) => {
   return apiClient.patch('user/reset-password', data)
}
export const forgotService = (data) => {
   return apiClient.get(`user/forgot-password?email=${data.email}`)
}
export const userService = () => {
   return apiClient.get(`user/me`);
}
// ----------------------------------------------------------
export const hostelServive = () => {
   return apiClient.get(`hostels`)
}


export default apiClient;