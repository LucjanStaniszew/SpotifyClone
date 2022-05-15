import React from 'react';
import { useDispatch } from 'react-redux';
import { saveAlbum } from '../../Redux/actions';
import { getTokenFromUrl } from '../LogIn/LogIn';
import './Albums.css';

export default function Albums ({album, id, cover, title, date}) {

    const logged = getTokenFromUrl();
    const token = logged.access_token;
    const dispatch = useDispatch()

    const handleButton = (e) => {
        dispatch(saveAlbum(e, token ))
    }

    return (
        <div className="albumsHome">
            <img src={cover} alt={title} className="cover"/>
            <h3 className="title">{title}</h3>
            <h5 className="date">Publicado: {date}</h5>
            <button className="add" key={id} onClick={() => handleButton(album.id)} >+ Add album</button>
        </div>
    )

}