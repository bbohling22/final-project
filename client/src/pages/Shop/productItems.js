import React from "react";
import './productItems.css';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    return (
        <div className="product">

            <div class="columns">
                <div class="column is-one-third ">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src={productImage} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                    
                            <div class="media-content">
                                <p class="title is-4">{productName}</p>
                                <p class="subtitle is-6">${price}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    )
};