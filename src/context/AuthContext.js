import { createContext, useContext, useState, useEffect } from 'react';
import { loginService, userService } from '@/service/eventService';
import apiClient from '@/service/eventService';
import { hostelServive } from '@/service/eventService'; 


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [hostel, setHostel] = useState({
      total: 0,
      loading: false,
      hostel: [],
   })

   useEffect( () => {
      const fetchUserDetails = async () => {
         const token = sessionStorage.getItem('token');
         if(token){
            apiClient.defaults.headers.Authorization = `Bearer ${token}`
            const user = await userService();
            setIsLoading(true);
            if (user.status === 200){
               setUser(user);
               setIsLoading(false);
            }else{   
               delete apiClient.defaults.headers.Authorization
               sessionStorage.removeItem('token');
               setIsLoading(false);
            };
         }
      }
      fetchUserDetails();
   }, [])

   const login = async (input) => {
      try {
         const response = await loginService(input);
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
         return e.response;
      }
   }

   const fetchAllHostel = async() => {
      try {
         setHostel((prevHostel) => ({
            ...prevHostel,
            loading: true
         }))
         const res = await hostelServive();
         if(res.status === 200){
            setHostel((prevHostel) => ({
               ...prevHostel,
               loading: false,
               total: res.data.data.total,
               hostel: res.data.data.hostels
            }))               
         }
         setHostel((prevHostel) => ({
            ...prevHostel,
            loading: false
         }))
         return res;
      }catch(err){
         setHostel((prevHostel) => ({
            ...prevHostel,
            loading: false
         }))
         return err.response;
      }
   }

   const logout = () => {
      sessionStorage.removeItem('token');
      setUser(null);
      delete apiClient.defaults.headers.Authorization
      window.location.pathname('auth/login');
   };

   return (
      <AuthContext.Provider value={{ 
         hostel,
         user,
         setHostel, 
         setUser, 
         login, 
         logout, 
         fetchAllHostel,
      }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   return useContext(AuthContext);
} 
