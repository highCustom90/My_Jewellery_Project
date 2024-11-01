import { Box, Button, Paper, Stack, Typography } from '@mui/material'
<<<<<<< HEAD
import React from 'react'
import { Engagement1Slider, Slider1 } from '../sliders/Slider1'
import { popularWeddingRingImage, ringEducation, shopBySlide, signatureExplore } from '../utils/AllImagesProvider'
=======
import React, { useEffect } from 'react'
import { Engagement1Slider, Slider1 } from '../sliders/Slider1'
import { popularWeddingRingImage, ringEducation, shopBySlide, signatureExplore } from '../utils/AllImagesProvider'
import Aos from 'aos'
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3




const WeddingRings = () => {
<<<<<<< HEAD
=======

    useEffect(() => {
        Aos.init({
            duration: 1200, // Animation duration
            once: false, // Whether animation should happen only once
        });
    }, [])


>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
    return (
        <div>
            <Paper className="h-[516px]" elevation={1}>
                <img src="src\assets\images\ring.jpg" alt="" className='h-full w-full object-contain' />
            </Paper>
            <div className='lg:w-[80%] m-auto'>
                <Stack className="mt-20 lg:justify-between sm:flex-wrap items-center sm:text-center lg:text-left" direction={"row"}>
<<<<<<< HEAD
                    <Box className="lg:w-[712px] lg:h-[705px] sm:mb-10 sm:m-auto">
=======
                    <Box className="lg:w-[712px] lg:h-[705px] sm:mb-10 sm:m-auto" data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-easing="500">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <img src="https://image.brilliantearth.com/cdn-cgi/image/width=720,height=545,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F48f66b9ac1644c1790ddef5e72cea395" alt="" />
                        <Stack direction={"column"} className='h-36 justify-around sm:items-center lg:items-start'>
                            <Typography variant='h4'>Women's Wedding Ring</Typography>
                            <Typography margin={"15px 0px"}>Browse stunning women's wedding bands, from nature inspired styles to modern designs.</Typography>
                            <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Shop Women's</Button>
                        </Stack>
                    </Box>
<<<<<<< HEAD
                    <Box className="lg:w-[712px] lg:h-[705px] sm:m-auto sm:text-center lg:text-left">
=======
                    <Box className="lg:w-[712px] lg:h-[705px] sm:m-auto sm:text-center lg:text-left" data-aos="fade-left"
                        data-aos-offset="500"
                        data-aos-easing="500">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <img src="https://image.brilliantearth.com/cdn-cgi/image/width=720,height=545,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fe70dd8b426ea4317ae88ea0fb425be51" alt="" />
                        <Stack direction={"column"} className='h-36 justify-around sm:items-center lg:items-start'>
                            <Typography variant='h4'>Men's Wedding Rings</Typography>
                            <Typography margin={"15px 0px"}>Browse stunning women's wedding bands, from nature inspired styles to modern designs.</Typography>
                            <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Shop Men's</Button>
                        </Stack>
                    </Box>
                </Stack>

<<<<<<< HEAD
                <Box className="bg-custom-green mt-20 flex justify-center items-center sm:flex-wrap h-[135px]">
=======
                <Box className="bg-custom-green mt-20 flex justify-center items-center sm:flex-wrap h-[135px]" data-aos="flip-down">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                    <img src="https://image.brilliantearth.com/media/thumbnail/b9/ed/b9ed7380a7160b5fa945e49642d392a4.jpg" alt="" />
                    <div className='p-[16px] text-white'>
                        <Typography variant='h6'>ENDS SOON!</Typography>
                        <Typography fontSize={"15px"}>
                            Receive Lab Diamond Studs (1/4 ct. tw.) with purchase over $1,000. A $265 value. <br />
                            Lab Diamond Studs & Tennis Bracelet with purchase over $3,000. A $615 value. <br />
                            Use code SPARKLE in cart.
                        </Typography>
                    </div>
                </Box>

                <div className='mt-14 sm:text-center lg:text-left'>
                    <Typography variant='h4' margin={"32px 0px"}>Shop By Style</Typography>
                    <Slider1 data={shopBySlide} />
                </div>

                <Stack height={"lg:592px"} className="mt-20 sm:text-center lg:text-left" direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
<<<<<<< HEAD
                    <Box padding={"0px 48px"} className="flex flex-col justify-center sm:items-center lg:items-start lg:w-[676px] h-[512px] sm:m-auto">
=======
                    <Box padding={"0px 48px"} className="flex flex-col justify-center sm:items-center lg:items-start lg:w-[676px] h-[512px] sm:m-auto" data-aos="zoom-in"
                    >
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <Typography variant='h2' mb={"16px"} fontSize={"36px"}>Find My Matching Wedding Ring</Typography>
                        <Typography fontSize={"16px"} mb="22px">Select your engagement ring, then discover the perfect wedding ring to match.</Typography>
                        <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Get Started</Button>
                    </Box>
<<<<<<< HEAD
                    <Box width={"676px"} height={"512px"} className="sm:m-auto">
=======
                    <Box width={"676px"} height={"512px"} className="sm:m-auto" data-aos="zoom-in"
                    >
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <video src="https://cdn.builder.io/o/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F8259017d6f7442d895e921e9bc70ebe8%2Fcompressed?apiKey=9f2a69003c86470ea05deb9ecb9887be&token=8259017d6f7442d895e921e9bc70ebe8&alt=media&optimized=true" autoPlay muted loop></video>
                    </Box>
                </Stack>

<<<<<<< HEAD
                <div className='mt-20 sm:text-center lg:text-left'>
=======
                <div className='mt-20 sm:text-center lg:text-left' data-aos="flip-up">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                    <Typography variant='h4'>Popular Wedding Rings</Typography>
                    <Engagement1Slider data={popularWeddingRingImage} />
                </div>

                <div className='mt-24 sm:text-center lg:text-left'>
                    <Typography variant='h4' mb={"30px"}>Explore Out Signature Collections</Typography>
                    <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
                        {signatureExplore.map(({ url, text }, index) => (
<<<<<<< HEAD
                            <Box overflow={"hidden"} key={index} className="mb-8 lg:h-[634px] lg:w-[464px] sm:w-full">
=======
                            <Box overflow={"hidden"} key={index} className="mb-8 lg:h-[634px] lg:w-[464px] sm:w-full" data-aos="zoom-in">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                                <div className='lg:w-[464px] lg:h-[537px]'>
                                    <img src={url} alt="" className="w-full h-full" />
                                </div>
                                <div>
                                    <Typography mt={"24px"} mb={"8px"} variant='h4' fontSize={"18px"}>{text[0]}</Typography>
                                    <Typography>{text[1]}</Typography>
                                </div>
                            </Box>
                        ))}
                    </Stack>
                </div>

                <Stack direction={"row"} justifyContent={"space-between"} height={"lg:625px"} className='mt-20 flex-wrap'>
<<<<<<< HEAD
                    <Box padding={"0px 48px"} className="flex flex-col justify-center lg:w-[719px] h-[545px] sm:w-full sm:items-center lg:items-start">
=======
                    <Box padding={"0px 48px"} className="flex flex-col justify-center lg:w-[719px] h-[545px] sm:w-full sm:items-center lg:items-start" data-aos="fade-right">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <Typography variant='h2' mb={"16px"} fontSize={"36px"}>Ready, Set, Stack</Typography>
                        <Typography fontSize={"16px"} mb="22px">Go for a set that speaks to your style.</Typography>
                        <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Shop Now</Button>
                    </Box>
<<<<<<< HEAD
                    <Box className="lg:w-[719px] h-[545px] sm:w-full">
=======
                    <Box className="lg:w-[719px] h-[545px] sm:w-full" data-aos="fade-left">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <img src="https://image.brilliantearth.com/cdn-cgi/image/width=720,height=545,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F5795a55864ef42e49dafe7e31560596e" alt="" className='h-full w-full' />
                    </Box>
                </Stack>

<<<<<<< HEAD
                <Box height={"lg:280px"} className='mt-20 lg:pt-[56px] lg:pb-[56px] lg:ps-[100px] lg:pe-[100px] bg-custom-green flex lg:flex-col sm:flex-wrap items-center lg:justify-between text-white sm:p-8 sm:justify-center sm:text-center'>
=======
                <Box height={"lg:280px"} className='mt-20 lg:pt-[56px] lg:pb-[56px] lg:ps-[100px] lg:pe-[100px] bg-custom-green flex lg:flex-col sm:flex-wrap items-center lg:justify-between text-white sm:p-8 sm:justify-center sm:text-center' data-aos="flip-down">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                    <Typography variant='h2' fontSize='36px'>Our Sustainability</Typography>
                    <Typography margin={"10px"}>96% of our gold is recycled because we care about miners, their wages, their communities, and the environment.</Typography>
                    <button className='ps-[16px] pe-[16px] h-[44px] bg-white text-black' variant='contained'>Learn More</button>
                </Box>

                <div className='mt-20 sm:text-center lg:text-left'>
                    <Typography variant='h4'>Wedding Ring Education</Typography>
                    <Slider1 data={ringEducation} />
                </div>
            </div>
        </div>
    )
}

export default WeddingRings