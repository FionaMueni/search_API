import React from 'react';
import "./list.css"

const List = ({list}) => {
    return (
        <div className='container'>
            <img src={list && list.poster} />
            <h2>{list && list.title}</h2>
        </div>
    );
}

export default List;
