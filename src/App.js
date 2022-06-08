import React, {useEffect, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Context} from './Context'
import Header from './comps/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Modal from './pages/Modal'

function App() {
    const {zoom, zoomImg} = useContext(Context)
    useEffect(() => {}, [zoomImg])
    return (
        <div>
            <Header />
            {zoom && <Modal img={zoomImg} />}
            <Routes>
                <Route path="/print-shop_portfolio-piece/" element={<Photos />} />
                <Route path="/print-shop_portfolio-piece/cart" element={<Cart />} />
                <Route path="/print-shop_portfolio-piece/favorites" element={<Favorites />} />
            </Routes>
        </div>
    )
}

export default App