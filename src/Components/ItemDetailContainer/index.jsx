import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";


const product = {   id: 1, image: "https://www.elindependiente.com/wp-content/uploads/2022/03/2_Emibele-Pulsera-de-Cuero-para-Hombre-990x594.jpg", title: "Emibele Pulsera de cuero"    }


export const ItemDetailContainer = () => {   

    const [data, setData] = useState({});

    useEffect(() => {   
        const getData = new Promise(resolve => {    
            setTimeout(() => {
                resolve(product);
            }, 2000);
        });
        getData.then(res => setData(res))

   },[])


    return (    
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;