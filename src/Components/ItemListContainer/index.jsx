import React, {useState, useEffect} from 'react';

import ItemList from '../ItemList';
import Title from '../Title';
import ItemCount from '../ItemCount';

const films = [ 
    {   id: 1, image: "https://www.elindependiente.com/wp-content/uploads/2022/03/2_Emibele-Pulsera-de-Cuero-para-Hombre-990x594.jpg", title: "Emibele Pulsera de cuero"},
    {   id: 2, image: "https://media.gq.com.mx/photos/6164e550e1224bdb3d42c450/master/w_1600%2Cc_limit/Lentes%2520de%2520ver%2520Thom%2520Browne.jpg", title: "Lentes Thom Browne"}, 
    {   id: 3, image: "https://cf.shopee.com.ar/file/bd743759ff5b4a366e2286d12751858a", title: "Reloj NEW YORK"},
];

export const ItemListContainer = () => {    
    const   [data, setData] = useState([]);

    useEffect(() => {   
        const getData = new Promise(resolve => {    
            setTimeout(() => {
                resolve(films);
            }, 2000);
        });
        getData.then(res => setData(res))


    },[])

    const onAdd = (quantity) => {   
        console.log(`Agregaste al carrito ${quantity} unidades`);
    }

    return (    
        <>
            <Title greeting='Maximiliano Ibañez' />
            <ItemCount initial={0} stock={9} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    ); 
}

export default ItemListContainer;