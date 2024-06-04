import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await axios.post('http://127.0.0.1:8000/logout/', {});
        // Redirect to login or home page after successful logout
        navigate('/login');
      } catch (error) {
        console.error('There was an error logging out!', error);
      }
    };

    handleLogout();
  }, [navigate]);

  return null; // No button, nothing to render
};

export default Logout;
