import React from 'react';
import Button from '../button/Button';
import FavouriteIcon from '../favourite-icon/FavouriteIcon';
import './styles.css'
interface abc {
    album: any;
     favBtnPlaceholder:string;
      isArtistInFavouriteList:boolean;
      onClick: any ;

      isItemFavourite: boolean;
}

export default function (props: abc) {
    const {artistName, collectionName, artworkUrl100, primaryGenreName, collectionId} = props.album;
    const style = {'width': 30, position: 'absolute', 'margin-left': 130, 'margin-top': 5, 'z-index':'10000', cursor:'pointer'}
    return (
        <div className="album-container">
            <>
            <FavouriteIcon isItemFavourite={props.isItemFavourite} onClick={() => props.onClick(props.isArtistInFavouriteList, {artistName, collectionName, artworkUrl100, primaryGenreName, collectionId})} style={style}/>
            <img src={artworkUrl100} alt={collectionName} className="background-img"></img>
            <img src={artworkUrl100} alt={collectionName} className="foreground-img"></img>
            </>
            <div className="album-details">
                <h5 className="text-field">{artistName}</h5>
                <p className="text-field">{collectionName}</p>
                <p className="text-field">{primaryGenreName}</p>
            </div>
        </div>
    )
}