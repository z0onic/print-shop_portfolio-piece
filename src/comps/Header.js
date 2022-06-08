import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../Context'

function Header() {
    const {cartItems, allPhotos, favorites} = useContext(Context)

    return (
        <header>
            <div className="main-link">
                <Link to='/print-shop_portfolio-piece/'><h2>Pic Some</h2></Link>
            </div>
            <div className="sub-links">
                <Link to='/print-shop_portfolio-piece/favorites'>
                    <i 
                        className={`ri-heart-${favorites.length > 0 ? 'fill' : 'line'} ri-fw ri-2x`}
                    ></i>
                </Link>
                <Link to='/print-shop_portfolio-piece/cart'><i 
                    className={`ri-shopping-cart-${cartItems.length > 0 ? 'fill' : 'line'} ri-fw ri-2x`}
                ></i></Link>
            </div>
        </header>
    )
}

export default Header