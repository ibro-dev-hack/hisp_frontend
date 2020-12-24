import { AuthProvider } from 'context/auth/authContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => {
   return <AuthProvider>
      <BrowserRouter>
         <Routes />
      </BrowserRouter>
   </AuthProvider>
}

export default App;