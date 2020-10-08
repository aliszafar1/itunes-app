import React from 'react';
import SearchArtist from './containers/search-artist/SearchArtist';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading-logo">Artisio</h1>
      <p className="subheading">Know more about your favourite artist</p>
      <SearchArtist />
     </div>
  );
}

export default App;
