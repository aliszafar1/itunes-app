import React from 'react';
import { ArtistsDetailsInterface } from '../../store/favourite-albums/reducer';
import AlbumDetails from '../album-details/AlbumDetails';
import './styles.css';
interface RenderAlbumsDetailsListInterface {
    albums: [];
    favouriteAlbumList: [];
    onClickFav: any;
}


export default function (props: any) {
    const {albums, favouriteAlbumList, onClickFav} = props;
    const renderAlbums = (albums: []): Array<any> => {
        return albums.map((album: any, index: number) => {
         const {collectionId} = album;
         const isArtistInFavouriteList: boolean = favouriteAlbumList.filter((artistDetails: ArtistsDetailsInterface) => artistDetails.collectionId === collectionId).length === 1;
         const favBtnPlaceholder = isArtistInFavouriteList ? 'Delete' : 'Fav';
            return (
                <li className="list-container" key={index}>
                    <AlbumDetails album={album} favBtnPlaceholder={favBtnPlaceholder} onClick={onClickFav} isArtistInFavouriteList={isArtistInFavouriteList}  isItemFavourite={isArtistInFavouriteList}/>
             </li>
         )
      })
     }

   return <ul className="albums-list">{renderAlbums(albums)}</ul>
}