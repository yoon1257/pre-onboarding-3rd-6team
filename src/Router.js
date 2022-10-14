import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './contexts/Context';
import Main from '../src/pages/Main';

const Router = (props) => {
  return (
    <BrowserRouter basename='pre-onboarding-3rd-6team'>
      <Context>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
};

export default Router;
