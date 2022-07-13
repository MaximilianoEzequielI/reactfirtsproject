import React, {useState, useEffect} from 'react';

import ItemList from '../ItemList';
import Title from '../Title';

import { useParams } from 'react-router-dom';


const films = [ 
    {   id: 1, image: "https://www.elindependiente.com/wp-content/uploads/2022/03/2_Emibele-Pulsera-de-Cuero-para-Hombre-990x594.jpg", category:'pulseras' , title: "Emibele Pulsera de cuero"},
    {   id: 2, image: "https://media.gq.com.mx/photos/6164e550e1224bdb3d42c450/master/w_1600%2Cc_limit/Lentes%2520de%2520ver%2520Thom%2520Browne.jpg", category:'optical' , title: "Lentes Thom Browne"}, 
    {   id: 3, image: "https://cf.shopee.com.ar/file/bd743759ff5b4a366e2286d12751858a", category:'relojes' , title: "Reloj NEW YORK"},
];

export const ItemListContainer = () => {    
    const   [data, setData] = useState([]);

    const { productosId } = useParams();

    useEffect(() => {   
         const getData = new Promise(resolve => {    
             setTimeout(() => {
                 resolve(films);
             }, 1000);
         });
         if (productosId) { 
            getData.then(res => setData(res.filter(film => film.category === productosId)));
         } else {   
            getData.then(res => setData(res));
         }

         
        // fetch('https://fakestoreapi.com/products') //API API API API
        //     .then(res=>res.json())
        //     .then(data=>data(data))

    },[productosId])


    return (    
        <>
            <Title greeting='Maximiliano Ibañez' />
            
            <ItemList data={data} />
        </>
    ); 
}

export default ItemListContainer;