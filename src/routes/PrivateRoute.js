import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'

const PrivateRoute = ({children}) => {
   const  user  = useAuth();
   const router = useRouter();
   useEffect(() => {
      if (!user.user) {
        router.push('/auth/login');
      } else {
        router.push('/dashboard');
      }
    }, [user.user]);

   return children;
}

export default PrivateRoute;