import { useState } from 'react';
import axios from '../../api/axios';
import { setAuthToken } from '../../utils/auth';

const TenantLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auth/login', {
        email,
        password
      });

      const { token } = response.data;
      setAuthToken(token);
      console.log(response.data.message);
      // Handle successful login
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render input fields */}
      <button type="submit">Login</button>
    </form>
  );
};

export default TenantLogin;