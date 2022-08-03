import React from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {  Link  } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";


const Cart = () => {    
    
    const { cart, totalPrice } = useCartContext();

    const order = { 
        buyer: {    
            name : 'Maxi',
            email: 'ezemaxi0345@gmail.com',
            phone: '123456',
            adress:'asd123'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})), 
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordercollection = collection(db, 'orders');
        addDoc(ordercollection, order)
        .then(({ id }) => console.log(id))
    }

        if (cart.length === 0){ 
            return (    
                <>  
                    <p>No hay elementos en el carrito</p>
                    <Link to='/'>Comprar</Link>
                </>
            );
        }
        
        return (   
            <>
                { 
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }   

                <p> 
                    total: {totalPrice()} 
                </p>
                <button onClick={handleClick}>Generar orden</button>
            </>
        )

}

export default Cart