import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

// github tek client id
// Ov23liOCfF0Mbxurp3gu

// github tek client secret
// 50e2fde1d1a60bef19db7fab23cf78623ac71474

// supabase tek client secret
// n5wQ@kU7Zx8BhY4

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function signInWithGithub() {

  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      })
      if (data) {
        console.log('Loged in')
      }
    // if (error) {
    //   setError(error.message);
    // } else {
    //   setError(null);
    //   onLogin(user);
    // }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      onLogin(user);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
