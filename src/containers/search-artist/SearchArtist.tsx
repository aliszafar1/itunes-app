import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { gettingAlbumsOfArtitst } from '../../store/artisits-album/actions';
import {RootReducerInterface} from '../../store/root-reducer';
import Button from '../../common/button/Button';
import './styles.css';

export default function (){
    const [artistToSearch, setArtistToSearch] = useState('');
    // Fix proper typing issues
    const {isGettingAlbum,albums,apiError } = useSelector<RootReducerInterface, any>(state => (state as any).ArtistsAlbumsReducer);

    const dispatch = useDispatch();

    const onInputTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setArtistToSearch(event.target.value);
    }
    const handleFormSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        dispatch(gettingAlbumsOfArtitst({artistToSearch}));
      }

      //Fix Type
    const renderAlbums = (albums: []): Array<any> => {
       return albums.map((album: any, index: number) => {
        const {artistName, collectionName, artworkUrl100, primaryGenreName} = album;
           return (
               <li className="album-container" key={index}>
                   <>
                   <img src={artworkUrl100} alt={collectionName} className="background-img"></img>
                   <img src={artworkUrl100} alt={collectionName} className="foreground-img"></img>
                   </>
                   <div className="album-details">
                        <h5 className="text-field">{artistName}</h5>
                        <p className="text-field">{collectionName}</p>
                        <p className="text-field">{primaryGenreName}</p>
                   </div>
            </li>
        )
    })
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text"
                className="search" 
                placeholder="Please enter artist's name"
                onChange={onInputTextChange} />
            </form>
            <section>
                <ul className="albums-list">{renderAlbums(albums)}</ul>
            </section>
        </>
    )
}