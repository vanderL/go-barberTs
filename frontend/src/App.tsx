import React from 'react';

import GlobalStyle from './styles/global';

import SigIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  )
}

export default App;
