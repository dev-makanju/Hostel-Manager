import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'

const PrivateRoute = ({children}) => {
   const  user  = useAuth();
   const router = useRouter();
   
   // redirect if not loggedin
   // if(!user){
   //    router.push('/auth/login');
   //    return null;
   // }

   return children;
}

export default PrivateRoute;