import React from 'react';
import Header from './containers/header/Header';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
     </div>
  );
}

export default App;
