import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false)
    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
       processOrder();
    }

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(keys => {
            const product = fakeData.find(pd =>pd.key ===keys)
            product.quantity = savedCart[keys];
            return product;
        })
        setCart(cartProducts);
    }, []);
    const orderPlacedStyle={
        margin: '0% 20%',
        
    }
    let thankYou;  
    if (orderPlaced) {
        thankYou = <img style={orderPlacedStyle} src={happyImage} alt=""/>
    }

    return (
        <div className='twin-container'>
            <div className='product-container'>
                {
                    cart.map(pd => <ReviewItem 
                    key={pd.key}
                    removeProduct ={removeProduct}
                    product={pd}>

                    </ReviewItem>)
                }
                {thankYou}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button className='main-button' onClick={handlePlaceOrder} >Place Order</button>
                </Cart>    
            </div>
           
        </div>
    );
};

export default Review;