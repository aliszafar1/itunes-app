import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RenderAlbumsList from '../../common/render-albums-list/RenderAlbumsList';
import { addArtistToFavourite, deleteArtistFromFavourite } from '../../store/favourite-albums/actions';
import { ArtistsDetailsInterface } from '../../store/favourite-albums/reducer';
import {RootReducerInterface} from '../../store/root-reducer';

export default function () {
    const {favouriteAlbum} = useSelector<RootReducerInterface, any>(state => (state as any).FavouriteAlbumsReducer);

    const dispatch = useDispatch();
    const onClickFav= (isArtistInFavouriteList:boolean, payload: ArtistsDetailsInterface) => {
        if(isArtistInFavouriteList){
            dispatch(deleteArtistFromFavourite(payload.collectionId));
        } else {
            dispatch(addArtistToFavourite(payload));
        }
    }


    return <RenderAlbumsList albums={favouriteAlbum} favouriteAlbumList={favouriteAlbum} onClickFav={onClickFav} />
    
}