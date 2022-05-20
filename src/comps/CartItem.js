import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'
import useHover from '../hooks/useHover'

function CartItem({item}) {
    const [iconRef, hovered] = useHover()
    const {removeFromCart} = useContext(Context)

    const iconClass = hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'
    
    // console.log(iconRef, hovered)

    return (
        <div className="cart-item">
            <i 
                className={iconClass}
                onClick={() => removeFromCart(item)}
                ref={iconRef}
            ></i>
            <img src={item.url} alt="" width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem