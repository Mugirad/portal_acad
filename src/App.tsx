import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard userInfo={user} onLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;