import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Record from '../src/components/Record';
import Timer from '../src/components/Timer';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/record' element={<Record />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
