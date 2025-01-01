import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Home from './components/Home';
import SignIn from './components/mui/sign-in/SignIn';
import './App.css';
import MainPage from './components/mui/shared-theme/main-page/MainPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data: { session } }) => {
      if (session) setUser(session.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleOnLogin = (data) => {
    setUser(data)
  }

  const handleOnLogOut = () => {
    setUser(null)
  }

  return (
    <div>
      {user ? (
        <MainPage user={user} onLogout={handleOnLogOut} />
      ) : (
        <SignIn onLogin={handleOnLogin} />
      )}
    </div>
  );
};

export default App;
