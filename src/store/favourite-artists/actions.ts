import {ADD_ARTIST_TO_FAVOURITE, DELETE_ARTIST_FROM_FAVOURITE} from './ constants';

export const addArtistToFavourite = (payload: any) => {
    return {type: ADD_ARTIST_TO_FAVOURITE, payload}
}

export const deleteArtistFromFavourite = (payload: any) => {
    return {type: DELETE_ARTIST_FROM_FAVOURITE, payload}
}