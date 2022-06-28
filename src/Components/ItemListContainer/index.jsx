import React from 'react';
import Title from '../Title';
import ItemCount from '../ItemCount';

export const ItemListContainer = () => {    

    const onAdd = (quantity) => {   
        console.log(`Agregaste al carrito ${quantity} unidades`);
    }

    return (    
        <>
            <Title greeting='4' />
            <ItemCount initial={0} stock={9} onAdd={onAdd} />
        </>
    ); 
}

export default ItemListContainer;