import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import EngagementRing from '../pages/EngagementRing'
import SingleProductDetailShow from '../pages/SingleProductDetailShow'
import WeddingRings from '../pages/WeddingRings'
import Jewelry from '../pages/Jewelry'
import About from '../pages/About'
import OurUsers from '../pages/OurUsers'
import { Toaster } from 'react-hot-toast'
import Login from '../pages/Login'
import AddToCart from '../pages/AddToCart'

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
                <Route path="/users" element={<OurUsers />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Toaster position="top-center" />
        </div>
    )
}

export default AllRoutes