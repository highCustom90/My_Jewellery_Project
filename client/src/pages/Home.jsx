import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { BoxSlider, Slider1 } from "../sliders/Slider1"
import { Link, Outlet } from "react-router-dom"


const sec1Image = [
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F1e37173274224cf09a03ff4185711380",
        text: "Three Stone Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fd8e00f0888c24bc88dd38a62804c5b05",
        text: "Nature Inspired Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F5bf074cc27e74fbcbcb5d15a077e9db2",
        text: "Solitaire Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F6b3af857d629481ba1f0398b76c88156",
        text: "Bridal Sets"
    },
]
const HomePageSlider = [
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F31e008b11e6f457e9d0240435c77a313",
        text: "Engagement Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F86e35f29cae14a08bb6fcc6a25bca484",
        text: "Women's Wedding Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fa6b8799f188d4d38a8ed85460df45a29",
        text: "Men's Wedding Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fc566e030fcb54568af048fbe0b59b22a",
        text: "Gemstone Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fcaa9166fa9e5495db554c3734dc0071c",
        text: "Fine Jewelry"
    }
]
const diamondTypeImage = [
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252F55138dcf7c3047dca6b5977b9bceaf4c&w=96&q=75&dpl=v1726568742694",
        text: "Round"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252F22c1825bc7cd4236acfc621064075d10&w=96&q=75&dpl=v1726568742694",
        text: "Emerald"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252F2acc984ca1624bf4839d6f375ddc059a&w=96&q=75&dpl=v1726568742694",
        text: "Cushion"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252F7e2bc1d339c04bfb86ccce73b23dff05&w=96&q=75&dpl=v1726568742694",
        text: "Fusion"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252F7622eace49424c43aba2b2036a6061fb&w=96&q=75&dpl=v1726568742694",
        text: "Pear"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252Fbe5ac40634a44cafb9d284665c460ae3&w=96&q=75&dpl=v1726568742694",
        text: "Radiant"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252F1d10816b762443a7a26ab81434577157&w=96&q=75&dpl=v1726568742694",
        text: "Princess"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252Fdf8bb60052394b09aaaebfe5ac0cb15c&w=96&q=75&dpl=v1726568742694",
        text: "Marquise"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252Fa7b5fe16e8304920a5ac539739b968b6&w=96&q=75&dpl=v1726568742694",
        text: "Asscher"
    },
    {
        url: "https://www.brilliantearth.com/_next/image/?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F9f2a69003c86470ea05deb9ecb9887be%252Fa4fe27053d254a218e0a7f3c15526a0a&w=96&q=75&dpl=v1726568742694",
        text: "Heart"
    },
]
const Home = () => {


    return (
        <div>
            <div style={{ height: "516px" }} className="overflow-hidden">
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
                        <div key={index}>
                            <img src={url} className="w-[70px] h-[70px] object-cover" alt="something went wrong" />
                            <span>{text}</span>
                        </div>
                    ))

                    }
                </div>
            </div>

            <div className="lg:w-[80%] m-auto sm:text-center lg:text-left">
                <Typography variant="h4">Shop Jewelry By Category</Typography>
                <Link to={'/engagement-ring'}> <Slider1 data={HomePageSlider} /></Link>
                <Outlet />
            </div>

            <div className="h-[135px] mt-20 w-[80%] m-auto border flex flex-wrap items-center justify-center text-white mb-12 overflow-hidden" style={{ backgroundColor: "#183e40" }}>
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

            <div className="flex items-center w-[80%] m-auto flex-wrap sm:flex-col lg:flex-row overflow-hidden">
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
                        <Box sx={{ height: "396px", width: "342px" }} key={index} className="sm:mb-8">
                            <img src={url} alt="image not found" className="object-cover" />
                            <Typography variant="h5" >{text}</Typography>
                        </Box>
                    ))}
                </div>
            </section>

            <section className="w-[80%] m-auto mt-28 sm:text-center lg:text-left">
                <Box sx={{ height: "456px" }}>
                    <img src="https://image.brilliantearth.com/cdn-cgi/image/width=1376,height=600,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F3952d226a12943c794775fbccdf7277e" alt="image not found" className="w-full h-full object-cover object-center" />
                    <Typography sx={{ marginBottom: "24px" }}>Discover all the details that make it live up to its name.</Typography>
                    <Button className="border w-[303px]" variant="outlined" color="black" sx={{ "&:hover": { backgroundColor: "black", color: "white" } }}>Shop Now</Button>
                </Box>

                <Box sx={{ height: "626px", marginTop: "120px" }}>
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