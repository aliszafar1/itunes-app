import { combineReducers } from "redux";
import ArtistsAlbumsReducer, {ArtisitsAlbumsInterface} from './artisits-album/reducer';
import FavouriteAlbumsReducer, {FavouriteAlbumListInterface} from './favourite-albums/reducer';

export interface RootReducerInterface {
    ArtisitsAlbumsInterface: ArtisitsAlbumsInterface;
    FavouriteAlbumsReducer: FavouriteAlbumListInterface;
}

export default combineReducers({ArtistsAlbumsReducer, FavouriteAlbumsReducer});