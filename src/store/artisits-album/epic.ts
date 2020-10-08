import { Epic, ofType } from "redux-observable";
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { GetArtistsAlbumsListService } from "../../services/getArtistsAlbums";

import { GETTING_ALBUMS_OF_ARTIST, GETTING_ALBUMS_OF_ARTIST_SUCCESS, GETTING_ALBUMS_OF_ARTIST_FAILURE } from "./constants";

const GettingArtistsAlbumsListEpic: Epic = (action$) => {
    return action$.pipe(
        ofType(GETTING_ALBUMS_OF_ARTIST),
        mergeMap(({payload}) => {
            return GetArtistsAlbumsListService(payload.artistToSearch, 5).pipe(
                map(response => ({type:GETTING_ALBUMS_OF_ARTIST_SUCCESS, payload: (response as any).data.results })),
                catchError(error => of({type: GETTING_ALBUMS_OF_ARTIST_FAILURE, payload: error}))
            )
        })
    )
}

export default [GettingArtistsAlbumsListEpic];