import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { gettingAlbumsOfArtitst } from '../../store/artisits-album/actions';
import { setSingleArtistName } from '../../store/favourite-albums/actions';
import './styles.css';

function Header(props: any){
    const dispatch = useDispatch();
    const [searchFieldInput, setSearchItem] = useState('');
    const isFavouriteAlbumRoute = props.location.pathname === "/favourite-albums";
    const placeholder = isFavouriteAlbumRoute ? 'Get album of particular artist' : "Please enter artist's name";

    const onInputTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.target.value);
    }
    const handleFormSubmit = (event:React.FormEvent) => {
        if(searchFieldInput.length){
            if(isFavouriteAlbumRoute){
                dispatch(setSingleArtistName(searchFieldInput));
            } else {
                dispatch(gettingAlbumsOfArtitst({searchFieldInput}));
            }
        }
        event.preventDefault();
      }
    return (
        <div className="header-container">
            <h1 className="heading-logo">Artisio</h1>
            <form onSubmit={handleFormSubmit}>
                    <input type="text"
                    className="search" 
                    placeholder={placeholder}
                    onChange={onInputTextChange} />
            </form>
            <ul className="routes-list">
                <li><Link className="route-link" to="/">Home</Link></li>
                <li><Link className="route-link" to="/favourite-albums">Favourite Albums</Link></li>
            </ul>
        </div>
    )
}

export default withRouter(Header);