import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Home from './home.js';
import Login from './login.js';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
