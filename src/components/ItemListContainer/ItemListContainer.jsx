import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoria} = useParams()
    const getProductsByCategory = () => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(items => {
            const products = items.filter(prod =>  prod.Idcategoria === categoria)
            // const productsList = ItemList({products})
            // console.log(productsList)
            setProductos(products)
        })
    }
    const getProducts = (category) => {
        fetch('../json/productos.json')
            .then(response => response.json())
            .then(products => {
                setProductos(products)
            })
    }
    

    useEffect(() => {
        if(categoria) {
            getProductsByCategory(categoria)
            console.log("hola")
        } else{
            getProducts()
        }
    }, [categoria] )

    console.log(productos)
    return (
        <>
        <div className='row'>
            <ItemList productos={productos}/> 
        </div>
    
        </>
        
    )
}