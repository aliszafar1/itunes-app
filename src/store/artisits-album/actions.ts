import { GETTING_ALBUMS_OF_ARTIST } from './constants';

export interface GettingAlbumsOfArtistInterface <T>{
    type: String,
    payload?: T
}

 export const gettingAlbumsOfArtitst = <T> (payload: T): GettingAlbumsOfArtistInterface<T> => {
     return {
         type: GETTING_ALBUMS_OF_ARTIST,
         payload
     }
 }