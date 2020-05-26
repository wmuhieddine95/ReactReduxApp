import React from 'react'

const DisplayProduct = ({products, deleteProduct}) => {
    const productList = products.map(product => {
        return(
            product.stock < 5 ? 
            (<div className="product" key={product.id}>
                <li>
                    <div>Name: {product.name}</div>
                    <div>Price: {product.price}</div>
                    <div>Stock: {product.stock}</div>
                    <button onClick={() => deleteProduct(product.id)}>delete</button>
                </li>
            </div>) : null
        )
    });

    return(
        <div className="display-products">
            <ul>
            {productList}
            </ul>
        </div>
    );
}
export default DisplayProduct;