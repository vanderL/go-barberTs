import React from 'react';

import GlobalStyle from './styles/global';

import SigIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SigIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

export default App;
