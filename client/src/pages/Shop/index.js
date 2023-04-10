import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./productItems";


export const Shop = () => {
    return (
        <div className="shop">
             <div className="shopName">
                <h1>Only Tomiea</h1>
            </div>
            <div className="products">
                {/* API call to data base of products. PRODUCTS is only for show */}
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div> 
    )
}

