import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation"

const PrivateRoute = ({children}) => {
   const  user  = useAuth();
   const router = useRouter();
   const pathname = usePathname()

   useEffect(() => {
      console.log(!user.user, user.user)
      const authRoutePattern = /^\/dashboard\/\w+/;
      if (!user.user) {
         if(pathname === '/auth/login' || 
            pathname === '/auth/signup' || 
            pathname === '/auth/forgot-password' || 
            pathname === '/auth/otp' ||
            pathname === '/auth/password-otp' ||
            pathname === '/auth/reset-password') 
         {
           return;
         }
         router.push('/auth/login');
      } else {
         if(authRoutePattern.test(pathname)){
           return;
         }
         router.push('/dashboard');
      }
    }, [!user.user]);

   return children;
}

export default PrivateRoute;