import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import SearchedArtistList from '../containers/search-artist/SearchArtist';
  import FavouriteAlbumsList from '../containers/favourite-albums/FavouriteAlbums';

  export default function(){
      return (
        <Router>
        <Switch>
            <Route exact path="/">
                <SearchedArtistList />
            </Route>
            <Route path="/favourite-albums">
                <FavouriteAlbumsList />
            </Route>
        </Switch>
    </Router>
      )
  }