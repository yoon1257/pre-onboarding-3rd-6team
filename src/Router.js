import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './contexts/Context';
import Main from '../src/pages/Main';
import { ThemeProvider } from 'styled-components';

const Router = (props) => {
  return (
    <Context>
      <ThemeProvider>
        <BrowserRouter basename='pre-onboarding-3rd-6team'>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Context>
  );
};

export default Router;
