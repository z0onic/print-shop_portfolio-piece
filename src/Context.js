import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const toggleFavorite = id => {
        setAllPhotos(prev => {
            // console.log(`clicked ${id}`)
            return prev.map(item => {
                return item.id === id ? 
                    {...item, isFavorite: !item.isFavorite} : 
                    item
            })
        })
    }

    const addToCart = img => {
        setCartItems(prev => prev.includes(img) ? [...prev] : [...prev, img])
    }

    const removeFromCart = img => {
        setCartItems(prev => prev.filter(photo => photo.id !== img.id))
    }

    // console.log(cartItems)

    useEffect(() => {
        const getPhotos = async () => {
            const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            const data = await res.json()
            setAllPhotos(data)
        }
        getPhotos()
    }, [])

    return (
        <Context.Provider 
            value={
                {
                    allPhotos, 
                    toggleFavorite, 
                    cartItems, 
                    addToCart,
                    removeFromCart
                }
            }
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}