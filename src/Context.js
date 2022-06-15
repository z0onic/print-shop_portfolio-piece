import React, {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchWord, setSearchWord] = useState('dog')
    const [search, setSearch] = useState(true)
    const [zoom, setZoom] = useState(false)
    const [zoomImg, setZoomImg] = useState('')

    const api = createApi({
        accessKey: "VE8OTpXKgS6Il2j-g0yvmzGVYT5XJhcQ2yJ5tzC-sVY"
    })

    const addToCart = img => {
        setCartItems(prev => prev.includes(img) ? [...prev] : [...prev, img])
    }

    const removeFromCart = img => {
        setCartItems(prev => prev.filter(photo => photo.id !== img.id))
    }

    const addFavorite = img => {
        setFavorites(prev => prev.includes(img) ? [...prev] : [...prev, img])
    }

    const removeFavorite = img => {
        setFavorites(prev => prev.filter(photo => photo.id !== img.id))
    }

    const handleZoom = img => {
        if(!zoom) {
            setZoomImg(img)
            setZoom(true)
        }
    }

    useEffect(() => {
        if(search === true) {
            api.search
                .getPhotos({query: searchWord, orientation: 'landscape', perPage: 30})
                .then(res => setAllPhotos(res.response.results.map(item => {
                    // console.log(item)
                    const { id, alt_description, urls, user } = item
                    const { regular } = urls
                    const { name } = user
                    return { id, alt_description, regular, name }
                })))
                .catch(e => console.log('something went wrong', e))
            setSearch(false)
        }
        // const getPhotos = async () => {
        //     const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        //     const data = await res.json()
        //     setAllPhotos(data)
        // }
        // getPhotos()
    }, [search])


    return (
        <Context.Provider 
            value={
                {
                    allPhotos,
                    cartItems, 
                    addToCart,
                    removeFromCart,
                    searchWord,
                    setSearchWord,
                    setSearch,
                    favorites,
                    addFavorite,
                    removeFavorite,
                    zoom,
                    setZoom,
                    handleZoom,
                    zoomImg
                }
            }
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}