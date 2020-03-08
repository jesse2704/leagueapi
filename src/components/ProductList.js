import React from 'react'

export default function ProductList(props) {
    return (
        <div>
            {props.products.map(product => (
                <p className="productlist_product" key={product.id}>
                    €{product.price}{' '}<b>{product.name}</b>
                </p>
            ))}
        </div>
    )
}


