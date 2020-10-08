import { combineReducers } from "redux";
import ArtistsAlbumsReducer, {ArtisitsAlbumsInterface} from './artisits-album/reducer';

export interface RootReducerInterface {
    ArtisitsAlbumsInterface: ArtisitsAlbumsInterface
}

export default combineReducers({ArtistsAlbumsReducer});