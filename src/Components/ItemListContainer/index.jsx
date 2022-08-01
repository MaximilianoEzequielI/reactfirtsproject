import React, {useState, useEffect} from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList';
import Title from '../Title';

import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {    
    const   [data, setData] = useState([]);

    const { productosId } = useParams();

    useEffect(() => {   
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (productosId){
        const queryFilter = query(queryCollection, where('categoria', '==', productosId))
        getDocs(queryFilter)
        .then(res => setData( res.docs.map(product => ({id: product.id, ...product.data()})))) 
          } else {   
            getDocs(queryCollection)
            .then(res => setData( res.docs.map(product => ({id: product.id, ...product.data()})))) 
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