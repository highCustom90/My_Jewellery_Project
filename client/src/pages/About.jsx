// import { Search } from '@mui/icons-material';
import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { missionPillar } from '../utils/AllImagesProvider';



const About = () => {

    return (
        <div>
            <div className='h-[458px]'>
                <video src='https://cdn.builder.io/o/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F14b84dde00e74588bc3a26059421fe12%2Fcompressed?apiKey=b47f39b49d994f41bd8e68fa9258a402&token=14b84dde00e74588bc3a26059421fe12&alt=media&optimized=true' autoPlay loop muted className='h-full w-full'></video>
            </div>

            <div className='bg-custom-green text-white'>
                <Stack className='justify-around lg:w-[80%] m-auto pt-[16px] pb-[16px] sm:flex-col lg:flex-row sm:items-center'>
                    <Typography>About</Typography>
                    <Typography>Mission</Typography>
                    <Typography>Transparency</Typography>
                    <Typography>Sustainability</Typography>
                    <Typography>Compassion</Typography>
                    <Typography>Inclusion</Typography>
                </Stack>
            </div>

            <div className='lg:w-[80%] m-auto mt-20'>
                <Stack direction={"row"} className='justify-around text-wrap flex-wrap'>
                    <Box className="lg:h-[463px] lg:w-[442px] sm:mb-5 sm:text-center lg:text-left">
                        <Typography variant='h3' className='sm:text-center lg:text-left'>Our Beginning</Typography>
                        <div className='mb-[16px]'>
                            <Typography>
                                In 2004, Co-Founder and CEO Beth Gerstein couldn’t find a <br /> diamond engagement ring that was ethical, sustainable, and <br /> traceable. She wanted the sparkling symbol of her <br /> commitment to represent more than love: the perfect piece <br /> would also respect the planet and protect its future. On a <br /> mission to make the jewelry industry more sustainable and <br /> ethical, Beth — alongside Eric Grossberg — founded Brilliant <br /> Earth in 2005.
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                From that first step through today, we've revolutionized the <br /> way jewelry is sourced, crafted, sold, and worn. We do not <br /> compromise between quality and conscience — and neither <br /> do our customers.
                            </Typography>
                        </div>
                    </Box>
                    <Box className="lg:w-[675px] lg:h-[463px] sm:text-center lg:text-left overflow-hidden ">
                        <div>
                            <video src="src\assets\videos\rose.mp4" loop autoPlay className='h-full w-full'></video>
                        </div>
                        <div>
                            “We started Brilliant Earth in 2005 to raise the ethical standards of the diamond industry <br /> and to create a new way to buy beautiful fine jewelry.”
                        </div>
                    </Box>
                </Stack>
            </div>

            <Stack className='mt-20 text-white bg-custom-green' direction={"column"}>
                <Box className="lg:h-[290px] lg:pt-[80px] pb-[80px] flex justify-center items-center">
                    <Typography variant='h4' className='text-center sm:hidden lg:block'>Our Mission to cultivate a more transparent, sustainable, <br /> compassionate, and inclusive jewelry industry has been at the <br /> core of everything we do from day one. It's in our DNA.</Typography>
                </Box>
                <Box className="lg:h-[570px] text-justify lg:w-[80%] m-auto">
                    <Typography variant='h4' className='text-center'>Our Mission Pillars</Typography>
                    <div className='flex items-center lg:justify-around sm:justify-center mt-20 flex-wrap'>
                        {missionPillar.map(({ url, text }, index) => (
                            <Box className="lg:h-[395px] lg:w-[250px] sm:mb-5 sm:text-center lg:text-left" key={index}>
                                <div className='w-[249px] h-[152px] sm:m-auto'>
                                    <img src={url} alt={text[0]} className='h-full w-full' />
                                </div>
                                <div className='mt-5'>
                                    <Typography variant='h5'>{text[0]}</Typography>
                                    <Typography className='pt-3'>{text[1]}</Typography>
                                    <Typography className='underline pt-2'>Learn More</Typography>
                                </div>
                            </Box>
                        ))
                        }
                    </div>
                </Box>
            </Stack>

            <Stack className='lg:h-[553px] pt-[80px] bg-about-color items-center justify-center' direction={"row"}>
                <Box className="lg:h-[393px] mb-[80px] pe-[32px] ps-[32px]">
                    <div className='text-center'>
                        <Typography variant='h4'>Forever Forward</Typography>
                    </div>
                    <div className='mt-8 mb-8'>
                        <Typography className='text-center'>
                            We take pride in our successes and focus on the future. We constantly look for <br /> new ways to push our Mission forward, leading the industry to greater heights <br /> by setting ambitious goals — and achieving them.
                        </Typography>
                    </div>
                    <Stack direction={"row"} className='justify-between items-center flex-wrap sm:justify-center sm:text-center lg:text-left'>
                        <Box className="lg:h-[157px] me-3 w-[250px] mb-5">
                            <Typography variant='h5' className='lg:h-[60px]'>Recycled Metals</Typography>
                            <Typography>Today, 96% of our gold and 97% <br /> of our silver is recycled. By 2025, <br /> 100% will be recycled or <br /> Fairmined.</Typography>
                        </Box>
                        <Box className="lg:h-[157px] me-3 w-[250px] mb-5">
                            <Typography variant='h5' className='lg:h-[60px]'>Circularity</Typography>
                            <Typography>
                                Recycled materials. Timeless <br /> designs. Lifetime warranties. And <br /> trade-in programs that give your <br /> jewelry new life.
                            </Typography>
                        </Box>
                        <Box className="lg:h-[157px] me-3 w-[250px] mb-5">
                            <Typography variant='h5' className='lg:h-[60px]'>Zero Waste</Typography>
                            <Typography>No single-use plastics by 2025. <br /> Zero waste in showrooms and <br /> offices by 2030.</Typography>
                        </Box>
                        <Box className="lg:h-[157px] me-3 w-[250px] mb-5">
                            <Typography variant='h5' className='lg:h-[60px]'>Emission reductions</Typography>
                            <Typography>We have committed to setting <br /> near-term company-wide emission <br /> reductions.</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Stack>

            <div className='bg-[#c2a1a5] lg:h-[1293px] sm:text-center lg:text-left'>
                <Typography className='text-center pt-[80px] pb-5' variant='h5'>The Brilliant Earth Difference</Typography>
                <Stack className='lg:w-[80%] m-auto flex-wrap justify-center items-center' direction={"row"}>
                    <Box className="lg:w-[560px] lg:h-[350px] flex justify-center lg:items-start flex-col p-4">
                        <Typography variant='h4' mb={"10px"} className='sm:text-center lg:text-left'>Expertly Designed <br /> Jewelry</Typography>
                        <Typography>Award-winning designers in our San Francisco studio dream up each piece, <br /> considering every aspect of the distinct design. Then, artisans with masterful <br /> attention to detail bring our jewelry to life, so you can wear it forever.</Typography>
                    </Box>
                    <Box className="w-[560px] h-[350px]">
                        <img src="https://image.brilliantearth.com/cdn-cgi/image/width=600,height=258,quality=100,format=auto/https://www.brilliantearth.com/bee2-ui/img/mission/about/About_BE-Difference_01.jpg" alt="" className='h-full w-full' />
                    </Box>
                    <Box className="w-[560px] h-[350px]">
                        <img src="https://image.brilliantearth.com/cdn-cgi/image/width=600,height=258,quality=100,format=auto/https://www.brilliantearth.com/bee2-ui/img/mission/about/About_BE-Difference_02.jpg" alt="" className='h-full w-full' />
                    </Box>
                    <Box className="w-[560px] h-[350px] flex justify-center lg:items-start flex-col p-4">
                        <Typography variant='h4' mb={"10px"}>Every Piece Crafted <br /> Ethically</Typography>
                        <Typography>Every aspect of our jewelry is ethically crafted, from the minute the materials <br /> are sourced, to the moment you put it on — because we believe you should <br /> feel good about what you're wearing.</Typography>
                    </Box>
                    <Box className="w-[560px] h-[350px] flex justify-center lg:items-start flex-col p-4">
                        <Typography variant='h4' mb={"10px"}>Uniquely Yours</Typography>
                        <Typography>We craft our jewelry joyfully, and just for you. Whether it's a made-to-order, <br /> one-of-a-kind engagement ring or a personalized piece of fine jewelry, our <br /> designs reflect the unique story of who you are.</Typography>
                    </Box>
                    <Box className="w-[560px] h-[350px]">
                        <img src="https://image.brilliantearth.com/cdn-cgi/image/width=600,height=258,quality=100,format=auto/https://www.brilliantearth.com/bee2-ui/img/mission/about/About_BE-Difference_03.jpg" alt="" className='h-full w-full' />
                    </Box>
                </Stack>
            </div>

            <div className='lg:h-[270px] bg-[#4c8380] text-white sm:text-center lg:text-left'>
                <Box className="lg:h-[110px] lg:w-[80%] m-auto pt-[80px]">
                    <Stack direction={"row"} className='justify-around items-center flex-wrap'>
                        <Box className="w-[209px] h-[110px]">
                            <Typography fontSize={"16px"} mb={"20px"}>Free Shipping Both Ways</Typography>
                            <Typography className='underline'>Learn More</Typography>
                        </Box>
                        <Box className="w-[209px] h-[110px]">
                            <Typography fontSize={"16px"} mb={"20px"}>Free 30-Day Returns & <br /> Exchanges</Typography>
                            <Typography className='underline'>Learn More</Typography>
                        </Box>
                        <Box className="w-[209px] h-[110px]">
                            <Typography fontSize={"16px"} mb={"20px"}>24/7 Customer Support</Typography>
                            <Typography className='underline'>Learn More</Typography>
                        </Box>
                        <Box className="w-[209px] h-[110px]">
                            <Typography fontSize={"16px"} mb={"20px"}>Free 60-Day Resizes</Typography>
                            <Typography className='underline'>Learn More</Typography>
                        </Box>
                        <Box className="w-[209px] h-[110px]">
                            <Typography fontSize={"16px"} mb={"20px"}>Free Diamond <br /> Upgrades</Typography>
                            <Typography className='underline'>Learn More</Typography>
                        </Box>
                    </Stack>
                </Box>
            </div>
        </div>
    )
}

export default About