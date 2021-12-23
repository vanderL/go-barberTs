import React from 'react';

import GlobalStyle from './styles/global';

import SigIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Diego' }}>
        <SigIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  )
}

export default App;
