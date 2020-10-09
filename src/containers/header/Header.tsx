import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { gettingAlbumsOfArtitst } from '../../store/artisits-album/actions';
import './styles.css';
import history from 'history'

export default function(){
    const [artistToSearch, setArtistToSearch] = useState('');
    const dispatch = useDispatch();

    const onInputTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setArtistToSearch(event.target.value);
    }
    const handleFormSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        dispatch(gettingAlbumsOfArtitst({artistToSearch}));
      }
console.log(history);
    return (
        <div className="header-container">
            <h1 className="heading-logo">Artisio</h1>
            <form onSubmit={handleFormSubmit}>
                    <input type="text"
                    className="search" 
                    placeholder="Please enter artist's name"
                    onChange={onInputTextChange} />
            </form>
            <ul className="routes-list">
                <li><a className="route-link" href="/">Home</a></li>
                <li><a className="route-link" href="/favourite-albums">Favourite Albums</a></li>
            </ul>
        </div>
    )
}