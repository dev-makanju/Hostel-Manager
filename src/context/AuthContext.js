import { createContext, useContext, useState, useEffect } from 'react';
import { loginService, userService } from '@/service/eventService';
import apiClient from '@/service/eventService';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);

   useEffect( () => {
      const fetchUserDetails = async () => {
         const token = sessionStorage.getItem('token');
         if(token){
            // apiClient.defaults.headers.Authorization = `Bearer ${token}`
            const user = await userService();
            if (user) setUser(user);
         }
      }
      fetchUserDetails();
   }, [])

   const login = async (input) => {
      try {
         const response = await loginService(input);
         console.log(response);
         if(response.status){
           const token = response.data.data.token;
           apiClient.defaults.headers.Authorization = `Bearer ${token}`
           sessionStorage.setItem('token', token); 
           setUser({
            ...response.data.data.user
           })
           return response;
         }
      }catch(e){
         console.log(e)
         return e.response;
      }
   }

   const logout = () => {
      sessionStorage.removeItem('token');
      setUser(null);
      delete apiClient.defaults.headers.Authorization
      window.location.pathname('auth/login');
   };

   return (
      <AuthContext.Provider value={{ user, setUser, login, logout }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   return useContext(AuthContext);
} 
