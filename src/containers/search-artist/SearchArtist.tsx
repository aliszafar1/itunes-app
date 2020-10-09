import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addArtistToFavourite, deleteArtistFromFavourite } from '../../store/favourite-albums/actions';
import { ArtistsDetailsInterface } from '../../store/favourite-albums/reducer';
import {RootReducerInterface} from '../../store/root-reducer';
import './styles.css';
import RenderAlbumsList from '../../common/render-albums-list/RenderAlbumsList';

export default function (){
    // Fix proper typing issues
    const {isGettingAlbum,albums,apiError } = useSelector<RootReducerInterface, any>(state => (state as any).ArtistsAlbumsReducer);
    const {favouriteAlbum} = useSelector<RootReducerInterface, any>(state => (state as any).FavouriteAlbumsReducer);
    const dispatch = useDispatch();

    const onClickFav= (isArtistInFavouriteList:boolean, payload: ArtistsDetailsInterface) => {
        if(isArtistInFavouriteList){
            dispatch(deleteArtistFromFavourite(payload.collectionId));
        } else {
            dispatch(addArtistToFavourite(payload));
        }
    }

    if(isGettingAlbum){
        return <p>Loading</p>
    } else if (albums.lenggth){
        return <RenderAlbumsList albums={albums} favouriteAlbumList={favouriteAlbum} onClickFav={onClickFav} />
    } else if(apiError) {
       return <p>Api Error</p>
    } else return <p>Error Loading Component</p>;
}