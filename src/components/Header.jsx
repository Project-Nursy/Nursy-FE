import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../api/axios';

function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiClient.post('/logout');
      localStorage.removeItem('accessToken'); // JWT 제거
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/home" style={{ margin: '0 10px' }}>
        Home
      </Link>
      <Link to="/" style={{ margin: '0 10px' }}>
        Login
      </Link>
      <Link to="/signup" style={{ margin: '0 10px' }}>
        Sign Up
      </Link>
      <button onClick={handleLogout} style={{ margin: '0 10px' }}>
        Logout
      </button>
    </nav>
  );
}

export default Header;
