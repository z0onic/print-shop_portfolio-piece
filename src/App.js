import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './comps/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/print-shop_portfolio-piece/" element={<Photos />} />
                <Route path="/print-shop_portfolio-piece/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App