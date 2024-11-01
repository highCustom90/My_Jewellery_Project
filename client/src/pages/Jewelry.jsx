<<<<<<< HEAD
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { jewelryCatImage, jewelryCollections, meaningJewelry, popularJewelry } from '../utils/AllImagesProvider';
=======
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { jewelryCatImage, jewelryCollections, meaningJewelry, popularJewelry } from '../utils/AllImagesProvider';
import Aos from 'aos';
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3



const Jewelry = () => {
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
            <Paper className='h-[516px]' elevation={2}>
                <img src="https://image.brilliantearth.com/cdn-cgi/image/width=2880,height=900,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F3ad61cf0bef4432f91c6de5ee4e41bf5" alt="" className='h-full object-cover w-full' />
            </Paper>

            {/* shop jewelry category image 1 */}
            <div className='lg:w-[80%] m-auto mt-36 sm:text-center lg:text-left'>
                <div>
                    <Typography variant='h4' mb={"24px"}>Shop Jewelry By Category</Typography>
                    <Stack direction={"row"} className='lg:justify-between sm:justify-center items-center lg:h-[441px] sm:flex-wrap'>
                        {jewelryCatImage.map(({ url, text }, index) => (
<<<<<<< HEAD
                            <Box className="lg:h-[441px] lg:w-[342px] sm:mb-5 sm:me-1" key={index}>
=======
                            <Box className="lg:h-[441px] lg:w-[342px] sm:mb-5 sm:me-1" key={index} data-aos="fade-up">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                                <div className='w-[342px] h-[396px]'>
                                    <img src={url} alt={text} className='h-full w-full' />
                                </div>
                                <Typography variant='h6' className='lg:mt-[24px] sm:mt-[10px]'>{text}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </div>

<<<<<<< HEAD
                <Box className="bg-custom-green mt-20 flex justify-center items-center sm:flex-wrap h-[135px] overflow-hidden">
=======
                <Box className="bg-custom-green mt-20 flex justify-center items-center sm:flex-wrap h-[135px] overflow-hidden" data-aos="fade-right">
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

                {/* most popular jewelery 2 */}
                <div className='mt-20'>
                    <Typography variant='h4' mb={"24px"} className='sm:text-center lg:text-left'>Most Popular Jewelry</Typography>
                    <Stack direction={"row"} className='lg:justify-between sm:justify-around justify-center items-center flex-wrap'>
                        {popularJewelry.map(({ url, text }, index) => (
<<<<<<< HEAD
                            <Box className='h-[293px] sm:mb-5' key={index}>
=======
                            <Box className='h-[293px] sm:mb-5' key={index} data-aos="fade-left">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                                <div className='w-[220px] h-[254px]'>
                                    <img src={url} alt="" className='h-full w-full' />
                                </div>
                                <Typography variant='h6' mt={"10px"}>{text}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </div>


                <Stack direction={"row"} className='lg:justify-between sm:justify-center items-center mt-20 flex-wrap'>
<<<<<<< HEAD
                    <Box className="lg:h-[767px] lg:w-[712px] overflow-hidden sm:mb-8">
=======
                    <Box className="lg:h-[767px] lg:w-[712px] overflow-hidden sm:mb-8" data-aos="fade-up">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <div className='lg:w-[712px] lg:h-[540px] mb-[24px]'>
                            <img src="https://image.brilliantearth.com/cdn-cgi/image/width=720,height=545,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Ff4562a479cb049a2b8e5f1787d3f4633" alt="" className='w-full h-full object-cover' />
                        </div>

                        <div>
                            <Typography variant='h4'>Design Your Own Earrings</Typography>
                            <Typography padding={"10px 0"}>Select your setting and diamonds to get exactly what you're looking for.</Typography>
                            <div className='flex flex-wrap flex-col h-24 justify-between sm:items-center lg:items-start'>
                                <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Natural Diamond Earrings</Button>
                                <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Lab Diamond Earrigns</Button>
                            </div>
                        </div>
                    </Box>
<<<<<<< HEAD

                    <Box className="lg:h-[767px] lg:w-[712px] overflow-hidden">
=======
                    <Box className="lg:h-[767px] lg:w-[712px] overflow-hidden" data-aos="fade-down">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                        <div className='lg:w-[712px] lg:h-[540px] mb-[24px]'>
                            <img src="https://image.brilliantearth.com/cdn-cgi/image/width=720,height=545,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F3f926b3050bd4f6baa39fe0b3db32fd3" alt="" className='w-full f-full object-cover' />
                        </div>
                        <div>
                            <Typography variant='h4'>Design Your Own Necklace</Typography>
                            <Typography padding={"10px 0"}>Customize a solitaire necklace with a setting and gemstone that suit your style.</Typography>
                            <div className='flex flex-wrap flex-col h-24 justify-between sm:items-center lg:items-start'>
                                <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Diamond Necklace</Button>
                                <Button variant='outlined' className="hover:bg-black hover:text-white w-[296px]" color='black'>Gemstone Necklace</Button>
                            </div>
                        </div>
                    </Box>
                </Stack>

                {/* meaning jewelry 3 */}
                <div className='mt-20 lg:text-left sm:text-center'>
                    <Typography variant='h4'>Jewelry with Meaning</Typography>
                    <Stack direction={"row"} className='mt-8 lg:justify-between sm:justify-center flex-wrap items-center'>
                        {meaningJewelry.map(({ url, text }, index) => (
<<<<<<< HEAD
                            <Box className="lg:w-[342px] lg:h-[441px] sm:mb-5 sm:me-1" key={index}>
=======
                            <Box className="lg:w-[342px] lg:h-[441px] sm:mb-5 sm:me-1" key={index} data-aos="zoom-in">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                                <div className='w-[342px] h-[396px]'>
                                    <img src={url} alt="" className='h-full w-full' />
                                </div>
                                <Typography className='' variant='h6'>{text}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </div>

                <div className='mt-20 sm:text-center lg:text-left'>
                    <Typography variant='h4'>Jewelry Collections</Typography>
                    <Stack direction={"row"} className='lg:justify-between sm:justify-center lg:h-[659px] mt-8 flex-wrap items-center'>
                        {jewelryCollections.map(({ url, text }, index) => (
<<<<<<< HEAD
                            <Box className="w-[464px] sm:mb-5" key={index}>
=======
                            <Box className="w-[464px] sm:mb-5" key={index} data-aos="zoom-in">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                                <div className='h-[567px]'>
                                    <img src={url} alt={text} className='h-full w-full' />
                                </div>
                                <div className='lg:mt-[24px]'>
                                    <Typography variant='h6' mt={"10px"}>{text[0]}</Typography>
                                    <Typography variant='h6' mt={"10px"} fontSize={"16px"}>{text[1]}</Typography>
                                </div>
                            </Box>
                        ))}
                    </Stack>
                </div>

<<<<<<< HEAD
                <Box height={"lg:280px"} className='mt-20 lg:pt-[56px] lg:pb-[56px] lg:ps-[100px] lg:pe-[100px] bg-custom-green flex lg:flex-col sm:flex-wrap items-center lg:justify-between text-white sm:p-8 sm:justify-center sm:text-center'>
=======
                <Box height={"lg:280px"} className='mt-20 lg:pt-[56px] lg:pb-[56px] lg:ps-[100px] lg:pe-[100px] bg-custom-green flex lg:flex-col sm:flex-wrap items-center lg:justify-between text-white sm:p-8 sm:justify-center sm:text-center' data-aos="flip-up">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                    <Typography variant='h2' fontSize='36px'>Our Sustainability</Typography>
                    <Typography margin={"10px"}>96% of our gold is recycled because we care about miners, their wages, their communities, and the environment.</Typography>
                    <button className='ps-[16px] pe-[16px] h-[44px] bg-white text-black' variant='contained'>Learn More</button>
                </Box>
            </div>
        </div>
    )
}

export default Jewelry;