import React from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import SearchedArtistList from '../containers/search-artist/SearchArtist';
import FavouriteAlbumsList from '../containers/favourite-albums/FavouriteAlbums';

  export default function(){
      return (
        <Switch>
            <Route exact path="/">
                <SearchedArtistList />
            </Route>
            <Route path="/favourite-albums">
                <FavouriteAlbumsList />
            </Route>
        </Switch>
      )
  }