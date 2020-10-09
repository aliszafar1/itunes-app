import { combineReducers } from "redux";
import ArtistsAlbumsReducer, {ArtisitsAlbumsInterface} from './artisits-album/reducer';
import FavouriteArtistsReducer, {FavouriteArtistListInterface} from './favourite-artists/reducer';

export interface RootReducerInterface {
    ArtisitsAlbumsInterface: ArtisitsAlbumsInterface;
    FavouriteArtistsReducer: FavouriteArtistListInterface;
}

export default combineReducers({ArtistsAlbumsReducer, FavouriteArtistsReducer});