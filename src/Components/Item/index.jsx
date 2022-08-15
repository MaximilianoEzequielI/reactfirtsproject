import './item.css';
import { Link } from 'react-router-dom';

import React from 'react';


const Item = ({info}) => {

    return(
        <div className='card'>
            <Link  to={`/detalle/${info.id}`} className='product'> 
                <img src={info.image} alt="" />
                <div className='info'>
                <p>{info.title}</p> 
                <h4>{info.price}</h4>
                </div>
            </Link>
        </div>
    );
}

export default Item;