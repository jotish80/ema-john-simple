import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {

    const [cart, setCart] = useState([]);
    useEffect (() => {
       const savedCart = getDatabaseCart();
       
       const productKeys = Object.keys(savedCart)
       const cardProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key===key);
           product.quantitiy= savedCart[key];
     
        console.log(savedCart[key]);
           return product;
        });
       console.log(cardProducts);
    })
    return (
        <div>
            <h2>Cart Items:{cart.length}</h2>
        </div>
    );
};

export default Review;