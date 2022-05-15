import React from 'react';
import './Albums.css';

export default function Albums ({cover, title, date}) {
    return (
        <div className="albumsHome">
            <img src={cover} alt={title} className="cover"/>
            <h2 className="title">{title}</h2>
            <h5 className="date">Publicado: {date}</h5>
        </div>
    )

}