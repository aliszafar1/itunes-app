import {GettingAlbumsOfArtistInterface} from './actions';
import {GETTING_ALBUMS_OF_ARTIST,
    GETTING_ALBUMS_OF_ARTIST_SUCCESS,
    GETTING_ALBUMS_OF_ARTIST_FAILURE} from './constants';

    interface ArtistsDetails {
        artistsName: string;
        country: string;


    }

export interface ArtisitsAlbumsInterface {
    isGettingAlbum: boolean;
    artistsDetail?: ArtistsDetails
    albums?: [];
    apiError?: string;
}

const initialState: ArtisitsAlbumsInterface = {
    isGettingAlbum: false,
    albums: [],
    artistsDetail: {
        artistsName:'',
        country: ''
    },
    apiError: ''
}


const ArtistsAlbumsReducer = <T>(state : ArtisitsAlbumsInterface = initialState, action: GettingAlbumsOfArtistInterface<T>) => {
    const {type, payload} = action;
    switch(type){
        case GETTING_ALBUMS_OF_ARTIST:
            return {...state, isGettingAlbum: true, albums: []}
        case GETTING_ALBUMS_OF_ARTIST_SUCCESS:
            return {...state, isGettingAlbum: false, albums: payload}
        case GETTING_ALBUMS_OF_ARTIST_FAILURE:
            return {...state, isGettingAlbum: false, apiError: payload}
        default:
            return state;
    }

}

export default ArtistsAlbumsReducer;