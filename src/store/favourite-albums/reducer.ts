import {ADD_ALBUM_TO_FAVOURITE, DELETE_ALBUM_FROM_FAVOURITE, RESET_FAVOURITE_ALBUM_LIST} from './ constants';

export interface FavouriteAlbumListInterface {
    favouriteAlbum: Array<ArtistsDetailsInterface> 
}

export interface ArtistsDetailsInterface {
    artistName: string;
    collectionName: string;
    artworkUrl100:string; 
    primaryGenreName:string;
    collectionId: number;
}

const initialState: FavouriteAlbumListInterface = {
    favouriteAlbum: []
}

const FavouriteAlbumsReducer = <T>(state : FavouriteAlbumListInterface = initialState, action:any) => {
    const {type, payload} = action;
    switch(type){
        case ADD_ALBUM_TO_FAVOURITE: {
            const {favouriteAlbum} = state;
            favouriteAlbum.push(payload);
            return {...state, favouriteAlbum};
        }
        case DELETE_ALBUM_FROM_FAVOURITE: {
            const favouriteAlbum = state.favouriteAlbum.filter((artist) => { return artist.collectionId !== payload});
            return {...state, favouriteAlbum};
        }
        case RESET_FAVOURITE_ALBUM_LIST:
            return state;
        default:
            return state;
    }

}

export default FavouriteAlbumsReducer;