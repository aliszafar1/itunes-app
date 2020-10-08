import axios from 'axios';
import { Observable } from 'rxjs';
import AppConfig from '../config/app-config';

export const GetArtistsAlbumsListService = (artistName:string, limit:number) => {
    const {BASE_URL} = AppConfig;
    const API_URL = `${BASE_URL}search?term=${artistName}&entity=album`;

    return new Observable(observer => {
        axios.get(API_URL)
            .then(data => {
                observer.next(data);
                observer.complete();
            })
            .catch(error => observer.error(error));
    })
}