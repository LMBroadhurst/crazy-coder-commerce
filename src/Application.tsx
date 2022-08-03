import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.styles.css';
import Home from './Routes/Home';
import SignIn from './Routes/SignIn';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;