import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation'

const PrivateRoute = ({children}) => {
   const  user  = useAuth();
   const router = useRouter();
   console.log(user);
   // redirect if not loggedin
   if(!user.user){
      router.push('/auth/login');
   }else{
      router.push('/dashboard');
   }

   return children;
}

export default PrivateRoute;