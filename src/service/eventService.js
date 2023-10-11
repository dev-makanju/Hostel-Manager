import axios from 'axios';

const BASE_URL  = 'https://hostel-manager.onrender.com/v1/';
const token = sessionStorage.getItem('token');

const apiClient =  axios.create({
   baseURL: BASE_URL,
   headers: {
      'Accept': 'application/json',
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${token}`
   }
})

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
export const forgotService = (data) => {
   return apiClient.get(`user/forgot-password?email=${data.email}`)
}
export const userService = () => {
   return apiClient.get(`user/me`);
}

export default apiClient;