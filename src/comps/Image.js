import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Context} from '../Context'
import useHover from '../hooks/useHover'

function Image({className, img}) {
    const [iconRef, hovered] = useHover()
    const {
        cartItems, 
        addToCart, 
        removeFromCart,
        favorites,
        addFavorite,
        removeFavorite,
        zoom,
        handleZoom
    } = useContext(Context)

    const heartIcon = favorites.some(item => item.id === img.id) ?
        <i
            className="ri-heart-fill favorite"
            onClick={() => removeFavorite(img)}
        ></i> :
        (hovered || zoom) &&
        <i
            className="ri-heart-line favorite"
            onClick={() => addFavorite(img)}
        ></i>

    const cartIcon = cartItems.some(item => item.id === img.id) ? 
        <i
            className="ri-shopping-cart-fill cart"
            onClick={() => removeFromCart(img)}
        ></i> :
        (hovered || zoom) && 
            <i 
                className="ri-add-circle-line cart"
                onClick={() => addToCart(img)}
            ></i>

    return (
        <div
            className={`${className} image-container`} 
            ref={iconRef}
        >
            <img
                src={img.regular}
                className="image-grid"
                alt={img.alt_description}
                onClick={e => handleZoom(img)}
            />
            {heartIcon}
            {cartIcon}
            {(hovered || zoom) &&
                <div className="artist">
                    <p>{img.name}</p>
                </div>
            }
        </div>
    )
}

Image.propsTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string,
        id: PropTypes.string,
        // isFavorite: PropTypes.bool
    })
}

export default Image

//eventually add the favorite list to local storage