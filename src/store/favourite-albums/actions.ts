import {ADD_ALBUM_TO_FAVOURITE, DELETE_ALBUM_FROM_FAVOURITE} from './ constants';

export const addArtistToFavourite = (payload: any) => {
    return {type: ADD_ALBUM_TO_FAVOURITE, payload}
}

export const deleteArtistFromFavourite = (payload: any) => {
    return {type: DELETE_ALBUM_FROM_FAVOURITE, payload}
}