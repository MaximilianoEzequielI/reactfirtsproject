import React from "react";
import { useCartContext } from "../../context/CartContext";
import './itemCart.css';

const ItemCart = ({ product }) => {

    const {  removeProduct  } = useCartContext();

    return( 
        <div className="itemCart">  
            <img className="image" src={product.image} alt={product.title} />         
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className="botoncito" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )

}






export default ItemCart