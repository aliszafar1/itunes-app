import React from 'react';
import Header from './containers/header/Header';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
     </div>
  );
}

export default App;
