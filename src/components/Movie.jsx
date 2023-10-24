import React from 'react';
import "./list.css"

const Movie = ({list}) => {
    return (
        <div className='movieContainer'>
            <img src={list && list.poster} style={{
                width: '150px',
            }}/>
            <h2>{list && list.title}</h2>  
        </div>
    );
}

export default Movie;
