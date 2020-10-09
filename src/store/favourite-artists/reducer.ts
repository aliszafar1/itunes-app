import {ADD_ARTIST_TO_FAVOURITE, DELETE_ARTIST_FROM_FAVOURITE, RESET_FAVOURITE_LIST} from './ constants';

export interface FavouriteArtistListInterface {
    favouriteArtist: Array<ArtistsDetailsInterface> 
}

export interface ArtistsDetailsInterface {
    artistName: string;
    collectionName: string;
    artworkUrl100:string; 
    primaryGenreName:string;
    collectionId: number;
}

const initialState: FavouriteArtistListInterface = {
    favouriteArtist: []
}

const FavouriteArtistsReducer = <T>(state : FavouriteArtistListInterface = initialState, action:any) => {
    const {type, payload} = action;
    switch(type){
        case ADD_ARTIST_TO_FAVOURITE: {
            const {favouriteArtist} = state;
            favouriteArtist.push(payload);
            return {...state, favouriteArtist};
        }
        case DELETE_ARTIST_FROM_FAVOURITE: {
            const favouriteArtist = state.favouriteArtist.filter((artist) => { return artist.collectionId !== payload});
            return {...state, favouriteArtist};
        }
        case RESET_FAVOURITE_LIST:
            return state;
        default:
            return state;
    }

}

export default FavouriteArtistsReducer;