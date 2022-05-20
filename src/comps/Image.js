import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'
import useHover from '../hooks/useHover'

function Image({className, img}) {
    const [iconRef, hovered] = useHover()
    const {
        toggleFavorite, 
        cartItems, 
        addToCart, 
        removeFromCart
    } = useContext(Context)

    const heartIcon = img.isFavorite ? 
        <i 
            onClick={() => toggleFavorite(img.id)} 
            className="ri-heart-fill favorite"
        ></i> :
        hovered && <i
            onClick={() => toggleFavorite(img.id)}
            className="ri-heart-line favorite"
        ></i>

    const cartIcon = cartItems.some(item => item.id === img.id) ? 
        <i
            className="ri-shopping-cart-fill cart"
            onClick={() => removeFromCart(img)}
        ></i> :
        hovered && 
            <i 
                className="ri-add-circle-line cart"
                onClick={() => addToCart(img)}
            ></i>

    return (
        <div 
            className={`${className} image-container`} 
            ref={iconRef}
        >
            <img src={img.url} className="image-grid" alt="" />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

Image.propsTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string,
        id: PropTypes.string,
        isFavorite: PropTypes.bool
    })
}

export default Image

//eventually add the favorite list to local storage