import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import AddToCart from '../pages/AddToCart'
import EngagementRing from '../pages/EngagementRing'
import Home from '../pages/Home'
import Jewelry from '../pages/Jewelry'
import Login from '../pages/Login'
import SingleProductDetailShow from '../pages/SingleProductDetailShow'
import WeddingRings from '../pages/WeddingRings'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/engagement-ring' element={<EngagementRing />} />
                <Route path="/singleprdetail/:shape" element={<SingleProductDetailShow />} />
                <Route path='/wishlist' element={<AddToCart />} />
                <Route path="/wedding-ring" element={<WeddingRings />} />
                <Route path="/jewelry" element={<Jewelry />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Toaster position="top-center" />
        </div>
    )
}

export default AllRoutes