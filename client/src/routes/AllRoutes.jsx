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

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/engagement-ring' element={<EngagementRing />} />
                <Route path="/singleprdetail" element={<SingleProductDetailShow />} />
                <Route path="/wedding-ring" element={<WeddingRings />} />
                <Route path="/jewelry" element={<Jewelry />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<OurUsers />} />
            </Routes>
            <Toaster position="top-center" />
        </div>
    )
}

export default AllRoutes