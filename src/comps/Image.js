import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'
import useHover from '../hooks/useHover'

//add a div on bottom of image with author attribution that pops up when mouse hover over image, clicked it will lead to artists page

function Image({className, img}) {
    // console.log(img)
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
            <img src={img.regular} className="image-grid" alt={img.alt_description} />
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