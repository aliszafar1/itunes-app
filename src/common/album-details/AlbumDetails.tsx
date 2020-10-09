import React from 'react';
import Button from '../button/Button';
import './styles.css'
interface abc {
    album: any;
     favBtnPlaceholder:string;
      isArtistInFavouriteList:boolean;
      onClick: any ;

}

export default function (props: abc) {
    const {artistName, collectionName, artworkUrl100, primaryGenreName, collectionId} = props.album;
    return (
        <div className="album-container">
            <>
            <Button placeholderText={props.favBtnPlaceholder} onClick={() => props.onClick(props.isArtistInFavouriteList, {artistName, collectionName, artworkUrl100, primaryGenreName, collectionId})}/>
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