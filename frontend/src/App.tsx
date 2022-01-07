import React from 'react';

import GlobalStyle from './styles/global';

import SigIn from './pages/SignIn';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SigIn />
      </AppProvider>

      <GlobalStyle />
    </>
  )
}

export default App;
