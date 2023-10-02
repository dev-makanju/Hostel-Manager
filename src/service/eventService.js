import axios from 'axios';

const BASE_URL  = 'https://hostel-manager.onrender.com/v1/';

const apiClient =  axios.create({
   baseURL: BASE_URL
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
   return apiClient.get('user/resend-otp', data)
}