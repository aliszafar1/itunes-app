import { Epic, ofType } from "redux-observable";
import {catchError, map, mergeMap, retry, timeout} from 'rxjs/operators';
import {of} from 'rxjs';
import { GetArtistsAlbumsListService } from "../../services/getArtistsAlbums";

import { GETTING_ALBUMS_OF_ARTIST, GETTING_ALBUMS_OF_ARTIST_SUCCESS, GETTING_ALBUMS_OF_ARTIST_FAILURE } from "./constants";

import AppConfig from '../../config/app-config';
const {NumberOfAPICallRetryAttempt, APITimeoutDuration} = AppConfig;

const GettingArtistsAlbumsListEpic: Epic = (action$) => {
    return action$.pipe(
        ofType(GETTING_ALBUMS_OF_ARTIST),
        mergeMap(({payload}) => {
            return GetArtistsAlbumsListService(payload.searchFieldInput).pipe(
                retry(NumberOfAPICallRetryAttempt),
                timeout(APITimeoutDuration),
                map(response => ({type:GETTING_ALBUMS_OF_ARTIST_SUCCESS, payload: (response as any).data.results })),
                catchError(error => of({type: GETTING_ALBUMS_OF_ARTIST_FAILURE, payload: error.toString()}))
            )
        })
    )
}

export default [GettingArtistsAlbumsListEpic];