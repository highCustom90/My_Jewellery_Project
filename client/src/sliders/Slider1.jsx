import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Slider, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, FreeMode, Grid, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { multipleProductImage } from '../utils/AllImagesProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Slider1 = ({ data }) => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
            once: false, // Whether animation should happen only once
        });
    }, []);
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper mt-8 sm:h-[150px] lg:h-auto overflow-hidden"
        >
            {data.map(({ url, text }, index) => (
                <SwiperSlide key={index}>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-center">
                        <img src={url} alt="not found" className='h-full w-full' />
                    </div>
                    <Typography variant='h5' className='sm:hidden lg:block'>{text}</Typography>
                </SwiperSlide>
            ))}
        </Swiper>
    )

}

const BoxSlider = () => {
    return (
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper h-[350px] w-[350px] mt-14 box-slider relative text-center"
        >
            <SwiperSlide className="h-[318px] w-[318px]">
                <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzI2NjcxNjc5LjIwODkwNDc0MTE5OS5qcGVn.jpg?w=400&h=400&fit=cover" alt="image not found" className='h-full w-full' />
            </SwiperSlide>
            <SwiperSlide className="h-[318px] w-[318px]">
                <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzI2NDk5NjA3LjgyMjM2MjI3MDc0NC5qcGVn.jpg?w=400&h=400&fit=cover" alt="image not found" className='h-full w-full' />
            </SwiperSlide>
            <SwiperSlide className="h-[318px] w-[318px]">
                <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzI2NDIzMjYwLjQwOTI2Njc3NDYzLmpwZWc=.jpg?w=640&h=640&fit=cover" alt="image not found" className='h-full w-full' />
            </SwiperSlide>
            <SwiperSlide className="h-[318px] w-[318px]">
                <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzI2MzQxMDgwLjU4OTY3NzYyMTk5LmpwZWc=.jpg?w=400&h=400&fit=cover" alt="image not found" className='h-full w-full' />
            </SwiperSlide>
            <SwiperSlide className="h-[318px] w-[318px]">
                <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzI2MjYyOTc0LjY5NTIzNDM5NDYwMi5qcGVn.jpg?w=640&h=640&fit=cover" alt="image not found" className='h-full w-full' />
            </SwiperSlide>
            <SwiperSlide className="h-[318px] w-[318px]">
                <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzI2MTUzMjg0LjA3MTg1MzI3Nzk3OS5qcGVn.jpg?w=640&h=640&fit=cover" alt="image not found" className='h-full w-full' />
            </SwiperSlide>
            <SwiperSlide className="h-[318px] w-[318px]">
                <img src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNzI2MDk0MTkyLjA1MTQ0NjQ5OTIzNi5qcGVn.jpg?w=400&h=400&fit=cover" alt="image not found" className='h-full w-full' />
            </SwiperSlide>
        </Swiper>
    )
}

const Engagement1Slider = ({ data }) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 1,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper mt-14 overflow-hidden"
            >
                {data.map(({ url, text }, index) => (
                    <SwiperSlide className='text-center border' key={index}>
                        <img src={url} alt={text} className='w-[150px] h-[150px] object-contain object-center block m-auto' />
                        <Typography>{text}</Typography>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    )
}

const DiamondShapeSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper border border-red-600"
        >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    )

}

// media quer slider when in mobile view of singleprdetails
const MediaQueryInMobileViewSlider = ({ data, value, diamondSize }) => {
    const [skinTone, setSkinTone] = useState(100)
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:hidden sm:block">
            {data.map((url, index) => (
                <SwiperSlide key={index}>
                    <img src={index === 0 ? diamondSize[value.value] : url} alt={url} className='w-[370px] h-[370px] object-contain object-center block m-auto' style={index === 3 ? { filter: `brightness(${skinTone}%)` } : {}} />
                    {index === 3 &&
                        <div className='w-[30%]'>
                            <Slider
                                sx={{
                                    '& .MuiSlider-thumb': {
                                        color: 'primary.main', // Customize thumb color0
                                    },
                                }}
                                className='absolute left-36 bottom-2 z-50'
                                orientation="horizontal"
                                value={skinTone}
                                onChange={(e) => setSkinTone(e.target.value)}
                                aria-label="Skin Tone"
                                min={45}
                                max={100}
                                valueLabelDisplay="auto"
                            // onKeyDown={preventHorizontalKeyboardNavigation}
                            />
                            <img
                                src={multipleProductImage[5]}
                                alt="something went wrong"
                                className='absolute bottom-14 left-3'
                                height={"373px"}
                                width={"373px"}
                            />
                        </div>
                    }
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
export { BoxSlider, DiamondShapeSlider, Engagement1Slider, MediaQueryInMobileViewSlider, Slider1 };
