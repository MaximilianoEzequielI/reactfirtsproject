import React, {useState} from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

import './itemDetail.css';


export const ItemDetail = ({data}) => {  
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {   
        setGoToCart(true);
        addProduct(data, quantity);
    }
    
    return (    
   
            <div className="detail">    
                <img className="detail__image" src={data.image} alt="" />
                <div className="content">   
                    <h1>{data.title}</h1>
                    {   
                        goToCart
                        ? <Link  className="cartt" to='/cart'>Terminar compra</Link>
                        :<ItemCount initial={0} stock={9} onAdd={onAdd} />
                    }
                
                </div>
            </div>

    );
}

export default ItemDetail;


