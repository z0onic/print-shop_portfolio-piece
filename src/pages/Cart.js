import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import CartItem from '../comps/CartItem'

export default function Cart() {
    const [buttonText, setButtonText] = useState('PlaceOrder')
    const {cartItems, removeFromCart} = useContext(Context)
    const cartItemsHtml = cartItems.map(item => {
        return (
            <CartItem key={item.id} item={item} />
        )
    })
    const calcTotal = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
    const handleOrder = () => {
        setButtonText('Ordering...')
        setTimeout(() => {
            console.log("Order Placed!")
            setButtonText('Place Order')
            cartItems.forEach(item => removeFromCart(item))
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsHtml}
            <p className="total-cost">Total: {calcTotal}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={handleOrder}>{buttonText}</button>
                </div> : 
                <p>Your cart is empty.</p>
            }
        </main>
    )
}