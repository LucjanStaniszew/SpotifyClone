import React from 'react';
import { useDispatch } from 'react-redux';
import { getMyAlbums, removeAlbum } from '../../Redux/actions';
import './FavAlbums.css';

export default function Albums ({album, id, cover, title, date}) {

    const token = sessionStorage.getItem("token");

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        dispatch(removeAlbum(e, token ))
        }

    const reload =  dispatch(getMyAlbums(token))

    return (
        <div className="albumsHome">
            <img src={cover} alt={title} className="cover"/>
            <h3 className="title">{title}</h3>
            <h5 className="date">Publicado: {date}</h5>
            <button className="remove" key={id} onClick={() => [handleDelete(album.album.id), reload()]} >- Remove album</button>
        </div>
    )

}