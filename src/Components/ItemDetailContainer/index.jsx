import React, {useEffect, useState} from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail";
import { useParams } from 'react-router-dom';




export const ItemDetailContainer = () => {   

    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {   
        const query = getFirestore();
        const queryDoc = doc(query, 'products', detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
   },[detalleId])


    return (    
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;