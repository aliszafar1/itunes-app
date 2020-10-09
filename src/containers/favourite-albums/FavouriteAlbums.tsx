import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RenderAlbumsList from '../../common/render-albums-list/RenderAlbumsList';
import { addArtistToFavourite, deleteArtistFromFavourite } from '../../store/favourite-albums/actions';
import { ArtistsDetailsInterface } from '../../store/favourite-albums/reducer';
import {RootReducerInterface} from '../../store/root-reducer';
import './styles.css'

export default function () {
    const {favouriteAlbum, singleArtist} = useSelector<RootReducerInterface, any>(state => (state as any).FavouriteAlbumsReducer);

    let albums = favouriteAlbum;
    if(singleArtist){
        albums = favouriteAlbum.filter((album: any) => album.artistName.toLowerCase() === singleArtist.toLowerCase());
    }

    const dispatch = useDispatch();
    const onClickFav= (isArtistInFavouriteList:boolean, payload: ArtistsDetailsInterface) => {
        if(isArtistInFavouriteList){
            dispatch(deleteArtistFromFavourite(payload.collectionId));
        } else {
            dispatch(addArtistToFavourite(payload));
        }
    }

    if(albums.length){
        return <RenderAlbumsList albums={albums} favouriteAlbumList={favouriteAlbum} onClickFav={onClickFav} />
    } else {
        return <p className="instructions">Sorry, we do not find any album</p>
    }
    
}