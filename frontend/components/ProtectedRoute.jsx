import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/tenants/login');
    }
  }, []);

  return children;
};

export default ProtectedRoute;