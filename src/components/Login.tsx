import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }: { setUser: React.Dispatch<React.SetStateAction<any>> }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response: any) => {
    const token = response.credential;
    
    fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`)
      .then(res => res.json())
      .then(userInfo => {
        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
        navigate('/dashboard');
      })
      .catch(err => console.error('Error verifying token:', err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Inicia sesión con Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log('Login Failed')}
          shape="pill"
          width="full"
          theme="outline"
          useOneTap
        />
      </div>
    </div>
  );
};

export default Login;