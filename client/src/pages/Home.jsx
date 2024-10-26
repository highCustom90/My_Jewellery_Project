import { Box, Button, Typography } from "@mui/material"
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { Tilt } from 'react-tilt'
import { BoxSlider, Slider1 } from "../sliders/Slider1"
import { diamondTypeImage, HomePageSlider, sec1Image } from "../utils/AllImagesProvider"


const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.2,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
            once: false, // Whether animation should happen only once
        });
    }, []);

    return (
        <div>

            <div style={{ height: "516px" }} className="overflow-hidden m-auto">
                <video
                    src="src\assets\videos\rose.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full"
                ></video>
            </div>

            <div className="text-center mt-12 mb-[80px]">
                <Typography variant="h3">Shop Diamonds by Shape</Typography>

                <div className="w-[80%] m-auto flex justify-between mt-5 flex-wrap items-center">
                    {diamondTypeImage.map(({ url, text }, index) => (
                        <Tilt options={defaultOptions} key={index}>
                            <div>
                                <img src={url} className="w-[70px] h-[70px] object-cover" alt="something went wrong" />
                                <span>{text}</span>
                            </div>
                        </Tilt>
                    ))
                    }
                </div>
            </div>

            <div className="lg:w-[80%] m-auto sm:text-center lg:text-left">
                <Typography variant="h4">Shop Jewelry By Category</Typography>
                <Link to={'/engagement-ring'}> <Slider1 data={HomePageSlider} /></Link>
                <Outlet />
            </div>

            <div data-aos="fade-right" className="h-[135px] mt-20 border border-blue-600 w-[80%] m-auto flex flex-wrap items-center justify-center text-white mb-12 overflow-hidden" style={{ backgroundColor: "#183e40" }}>
                <div className="w-[220px] h-[135px]">
                    <img src="https://image.brilliantearth.com/media/thumbnail/de/18/de188bc6df9cc2c06834a5d962da22e2.jpg" alt="something wrong" className="object-cover" />
                </div>
                <div className="">
                    <Typography>ENDS SOON!</Typography>
                    <Typography>
                        Receive Lab Diamond Studs with purchase over $1,000. A $200 value. <br />
                        Use code STUDS in cart.
                    </Typography>
                </div>
            </div>

            <div className="flex items-center w-[80%] m-auto flex-wrap sm:flex-col lg:flex-row overflow-hidden" data-aos="fade-left">
                <Box className="sm:w-[100%] lg:w-[50%]" sx={{ height: "545px", }}>
                    <img src="https://image.brilliantearth.com/cdn-cgi/image/width=720,height=545,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F2b97ad24918c460f9c5b1dd53ab6686d" alt="image not found" className="h-full w-full object-cover" />
                </Box>
                <Box className="sm:p-2 lg:p-20 lg:pt-[200px] sm:w-[100%] lg:w-[50%] flex flex-wrap items-center justify-center flex-col" sx={{ height: "545px", }} bgcolor={"#dad4de"}>
                    <Typography variant="h4">Best Selling Engagement Rings</Typography>
                    <Typography color="#2c2c2c" sx={{ margin: "18px 0" }}>Expertly designed by us, favorited by you.</Typography>
                    <Button className="border w-[303px]" variant="outlined" color="black" sx={{ "&:hover": { backgroundColor: "black", color: "white" } }}>Shop Now</Button>
                </Box>
            </div>

            <section className="w-[80%] m-auto mt-14 sec-1">
                <Typography variant="h4" className="sm:text-2xl">Popular Engagement Ring Styles</Typography>
                <div className="mt-5 flex items-center lg:justify-between sm:justify-center flex-wrap">
                    {sec1Image.map(({ url, text }, index) => (
                        <Box sx={{ height: "396px", width: "342px" }} key={index} className="sm:mb-8" data-aos="zoom-in-up">
                            <img src={url} alt="image not found" className="object-cover" />
                            <Typography variant="h5" >{text}</Typography>
                        </Box>
                    ))}
                </div>
            </section>

            <section className="w-[80%] m-auto mt-28 sm:text-center lg:text-left">
                <Box sx={{ height: "456px" }} data-aos="flip-left">
                    <img src="https://image.brilliantearth.com/cdn-cgi/image/width=1376,height=600,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F3952d226a12943c794775fbccdf7277e" alt="image not found" className="w-full h-full object-cover object-center" />
                    <Typography sx={{ marginBottom: "24px" }}>Discover all the details that make it live up to its name.</Typography>
                    <Button className="border w-[303px]" variant="outlined" color="black" sx={{ "&:hover": { backgroundColor: "black", color: "white" } }}>Shop Now</Button>
                </Box>

                <Box sx={{ height: "626px", marginTop: "120px" }} data-aos="flip-up">
                    <img src="https://image.brilliantearth.com/cdn-cgi/image/width=1376,height=600,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F96c8bfbd49de468babfdeefa3faf6125" alt="" className="w-full h-full object-cover" />
                    <Typography variant="h4" sx={{ marginTop: "16px" }}>We're Here for You, In Person and Online</Typography>
                    <Typography color="#2c2c2c">Whether it’s at a store near you or online, we curate your appointment just for you.</Typography>
                    <div className="mt-6 flex sm:justify-center lg:justify-between lg:w-[45%] sm:flex-wrap h-[85px]">
                        <Button className="border w-[303px] h-[36px]" variant="outlined" color="black" sx={{ "&:hover": { backgroundColor: "black", color: "white" } }}>Visit a Showroom</Button>
                        <Button className="w-[303px] h-[36px] mt-3" variant="outlined" color="black" sx={{ "&:hover": { backgroundColor: "black", color: "white" } }}>Book a Virtual Appointment</Button>
                    </div>
                </Box>
            </section>

            <section className="h-[540px] w-[80%] m-auto lg:mt-48 sm:mt-96 bg-custom-green overflow-hidden lg:p-14 text-white">
                <div className="flex items-center lg:justify-between flex-wrap sm:justify-center sm:mt-5 sm:flex-col lg:flex-row">
                    <Typography variant="h4">Get Inspired</Typography>
                    <Typography>Shop Instagram</Typography>
                </div>
                <BoxSlider />
            </section>


        </div>
    )
}

export default Home