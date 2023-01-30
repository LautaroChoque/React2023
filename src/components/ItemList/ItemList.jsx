import {Item} from "../Item/Item"
export const ItemList = ({products}) => {
    return (
        <>
        {products.map(producto => <Item key={producto.id} Item={producto}/> )}
        </>

    )
}

