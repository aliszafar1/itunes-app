import { combineEpics } from "redux-observable";
import ArtistsAlbumsEpics from './artisits-album/epic';
export default combineEpics(...ArtistsAlbumsEpics);