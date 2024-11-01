import React from 'react'
<<<<<<< HEAD
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
=======
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
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3

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
<<<<<<< HEAD
                <Route path="/users" element={<OurUsers />} />
                <Route path="/login" element={<Login />} />
=======
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<h1>Page Not Fount</h1>} />
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
            </Routes>
            <Toaster position="top-center" />
        </div>
    )
}

export default AllRoutes