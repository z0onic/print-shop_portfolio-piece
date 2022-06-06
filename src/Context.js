import React, {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'

const Context = React.createContext()

//replace url in getPhotos with an unsplash api call
//call a limited amount of photos
//end up with an array of objects. each object has url id and isFav property

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchWord, setSearchWord] = useState('dog')

    const api = createApi({
        accessKey: "VE8OTpXKgS6Il2j-g0yvmzGVYT5XJhcQ2yJ5tzC-sVY"
    })

    const toggleFavorite = id => {
        setAllPhotos(prev => {
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

    useEffect(() => {
        api.search
            .getPhotos({query: searchWord, orientation: 'landscape', perPage: 30})
            .then(res => setAllPhotos(res.response.results.map(item => {
                const { id, alt_description, urls, user } = item
                const { regular } = urls
                const { name } = user
                return {id, alt_description, regular, name, is_favorite: false}
            })))
            .catch(() => console.log('something went wrong'))
        // const getPhotos = async () => {
        //     const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        //     const data = await res.json()
        //     setAllPhotos(data)
        // }
        // getPhotos()
    }, [])

    // console.log(allPhotos)

    return (
        <Context.Provider 
            value={
                {
                    allPhotos, 
                    toggleFavorite, 
                    cartItems, 
                    addToCart,
                    removeFromCart,
                    searchWord,
                    setSearchWord
                }
            }
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}