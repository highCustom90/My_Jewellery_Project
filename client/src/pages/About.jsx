// import { Search } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { missionPillar } from '../utils/AllImagesProvider';
import Aos from 'aos';


const AboutNav = [
    "About",
    "Mission",
    "Transparency",
    "Sustainability",
    "Compassion",
    "Inclusion"
]

const lastDiv = [
    {
        word1: "Free Shipping Both Ways",
        word2: "Learn More"
    },
    {
        word1: "Free 30-Day Returns & Exchanges",
        word2: "Learn More"
    },
    {
        word1: "24/7 Customer Support",
        word2: "Learn More"
    },
    {
        word1: "Free 60-Day Resizes",
        word2: "Learn More"
    },
    {
        word1: "Free Diamond Upgrades",
        word2: "Learn More"
    },
]

const last3rdDiv = [
    {
        word1: "Recycled Metals",
        word2: "Today, 96% of our gold and 97% of our silver is recycled. By 2025, 100% will be recycled or Fairmined."
    },
    {
        word1: "Circularity",
        word2: "Recycled materials. Timeless designs. Lifetime warranties. And trade-in programs that give your jewelry new life."
    },
    {
        word1: "Zero Waste",
        word2: "No single-use plastics by 2025. Zero waste in showrooms and offices by 2030."
    },
    {
        word1: "Emission reductions",
        word2: "We have committed to setting near-term company-wide emission reductions."
    },
]

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 1200, // Animation duration
            once: false, // Whether animation should happen only once
        });
    }, [])

    return (
        <div>
            <div className='h-[458px]'>
                <video src='https://cdn.builder.io/o/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F14b84dde00e74588bc3a26059421fe12%2Fcompressed?apiKey=b47f39b49d994f41bd8e68fa9258a402&token=14b84dde00e74588bc3a26059421fe12&alt=media&optimized=true' autoPlay loop muted className='h-full w-full'></video>
            </div>

            <div className='bg-custom-green text-white'>
                <Stack className='justify-around lg:w-[80%] m-auto pt-[16px] pb-[16px] sm:flex-col lg:flex-row sm:items-center'>
                    {AboutNav.map((el, index) => (
                        <Typography key={index}>{el}</Typography>
                    ))}
                </Stack>
            </div>

            <div className='lg:w-[80%] m-auto mt-20'>
                <Stack direction={"row"} className='justify-around text-wrap flex-wrap'>
                    <Box className="lg:h-[463px] lg:w-[442px] sm:mb-5 sm:text-center lg:text-left" data-aos="fade-right">
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
                    <Box className="lg:w-[675px] lg:h-[463px] sm:text-center lg:text-left overflow-hidden" data-aos="fade-left">
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
                            <Box className="lg:h-[395px] lg:w-[250px] sm:mb-5 sm:text-center lg:text-left" key={index} data-aos="fade-up">
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
                        {last3rdDiv.map(({ word1, word2 }, index) => (
                            <Box className="lg:h-[157px] me-3 w-[250px] mb-5" key={index}>
                                <Typography variant='h5' className='lg:h-[60px]'>{word1}</Typography>
                                <Typography>{word2}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Stack>

            {/* here use map for reduce our code */}
            <div className="bg-[#c2a1a5] lg:h-[1293px] text-center lg:text-left pt-[80px] pb-5">
                <Typography variant="h5" className='text-center mb-3'>The Brilliant Earth Difference</Typography>
                <Stack className="lg:w-[80%] m-auto flex-wrap justify-center items-center" direction="row">
                    {[
                        {
                            title: "Expertly Designed Jewelry",
                            description: "Award-winning designers in our San Francisco studio dream up each piece, considering every aspect of the distinct design. Then, artisans with masterful attention to detail bring our jewelry to life, so you can wear it forever.",
                        },
                        {
                            imgSrc: "https://image.brilliantearth.com/cdn-cgi/image/width=600,height=258,quality=100,format=auto/https://www.brilliantearth.com/bee2-ui/img/mission/about/About_BE-Difference_01.jpg",
                            alt: "Jewelry Design"
                        },
                        {
                            imgSrc: "https://image.brilliantearth.com/cdn-cgi/image/width=600,height=258,quality=100,format=auto/https://www.brilliantearth.com/bee2-ui/img/mission/about/About_BE-Difference_02.jpg",
                            alt: "Ethically Crafted"
                        },
                        {
                            title: "Every Piece Crafted Ethically",
                            description: "Every aspect of our jewelry is ethically crafted, from the minute the materials are sourced, to the moment you put it on — because we believe you should feel good about what you're wearing.",
                        },
                        {
                            title: "Uniquely Yours",
                            description: "We craft our jewelry joyfully, and just for you. Whether it's a made-to-order, one-of-a-kind engagement ring or a personalized piece of fine jewelry, our designs reflect the unique story of who you are.",
                        },
                        {
                            imgSrc: "https://image.brilliantearth.com/cdn-cgi/image/width=600,height=258,quality=100,format=auto/https://www.brilliantearth.com/bee2-ui/img/mission/about/About_BE-Difference_03.jpg",
                            alt: "Personalized Jewelry"
                        }
                    ].map((item, index) => (
                        item.imgSrc ? (
                            <Box key={index} className="w-[560px] h-[350px]" data-aos="zoom-in">
                                <img src={item.imgSrc} alt={item.alt} className="h-full w-full" />
                            </Box>
                        ) : (
                            <Box key={index} className="w-[560px] h-[350px] flex flex-col justify-center lg:items-start p-4" data-aos="zoom-in">
                                <Typography variant="h4" mb="10px">{item.title}</Typography>
                                <Typography>{item.description}</Typography>
                            </Box>
                        )
                    ))}
                </Stack>
            </div>

            <div className='lg:h-[270px] bg-[#4c8380] text-white sm:text-center lg:text-left'>
                <Box className="lg:h-[110px] lg:w-[80%] m-auto pt-[80px]">
                    <Stack direction={"row"} className='justify-around items-center flex-wrap'>
                        {lastDiv.map(({ word1, word2 }, index) => (
                            <Box className="w-[209px] h-[110px]" key={index}>
                                <Typography fontSize={"16px"} mb={"20px"}>{word1}</Typography>
                                <Typography className='underline'>{word2}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </div>
        </div>
    )
}


export default About