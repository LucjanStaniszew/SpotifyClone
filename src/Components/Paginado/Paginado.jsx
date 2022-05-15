import React from 'react';
import './Paginado.css';

export default function Paginado ({albumsPorPagina, todosAlbumes, paginate, paginaActual}) {
    
    const cantPaginas = []

    for (let i = 0; i < Math.ceil(todosAlbumes/albumsPorPagina); i++){
        cantPaginas.push(i+1)
    }

    return(
        <div className="paginate">
            {
                cantPaginas?.map((a, index) => {
                    return (
                        <button className={a=cantPaginas ? "activo" : "inactivo"} key={index} onClick={() => paginate(a)}>{a}</button>
                    )
                })
            }
        </div>
    )
}