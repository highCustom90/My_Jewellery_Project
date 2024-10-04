import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Engagement1Slider } from '../sliders/Slider1';

import { EngagementAccordion, EngagementImageChanger } from '../utils/HelperFunctions';
import { EngagemenExploreImages, Engagement1SliderImage } from '../utils/AllImagesProvider';



const EngagementRing = () => {

    return (
        <div className='w-[80%] m-auto overflow-hidden'>
            <div className='text-center p-[49px]'>
                <Typography variant='h3'>Engagement Rings</Typography>
                <Typography className='pt-3 sm:hidden lg:block'>Whether it's classic or modern, choose your dream engagement ring and we'll bring <br /> it to life.</Typography>
            </div>

            <Stack direction={'row'} justifyContent={"center"} className='w-full'>
                <Box width={"20%"} height={"60px"} className="border border-black text-center p-4 sm:hidden">
                    <Typography>Design Your Ring</Typography>
                </Box>
                <Box width={"20%"} height={"60px"} className="border border-black text-center p-3 sm:hidden lg:flex items-center justify-between">
                    <Typography variant='h4'>1</Typography>
                    <Typography>Choose Setting</Typography>
                    <Typography>ringimg</Typography>
                </Box>
                <Box width={"20%"} height={"60px"} className="border border-black text-center p-3 sm:hidden lg:flex items-center justify-between">
                    <Typography variant='h4'>2</Typography>
                    <Typography>Choose Setting</Typography>
                    <Typography>ringimg</Typography>
                </Box>
                <Box width={"20%"} height={"60px"} className="border border-black text-center p-3 sm:hidden lg:flex items-center justify-between">
                    <Typography variant='h4'>3</Typography>
                    <Typography>Choose Setting</Typography>
                    <Typography>ringimg</Typography>
                </Box>
            </Stack>

            <Stack direction={"row"}>
                <Engagement1Slider data={Engagement1SliderImage} />
            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"} className='mt-14'>
                <Typography className='p-3 bg-black text-white'>Filter by</Typography>
                <Typography className='p-3 bg-black text-white'>Sorted By</Typography>
            </Stack>

            {/* here image changer that 200 images */}
            <EngagementImageChanger />

            <div className='mt-14'>
                <Typography variant='h5' className='sm:text-center lg:text-left'>MORE TO EXPLORE</Typography>
                <Stack direction={"row"} justifyContent={"space-between"} className='sm:flex-wrap mt-8'>
                    {EngagemenExploreImages.map(({ url, text }, index) => (
                        <Box height={"333px"} width={"379px"} overflow={"hidden"} key={index} className="sm:mb-5 m-auto">
                            <div className='h-[95%] w-[95%] overflow-hidden'>
                                <img src={url} className="hover:scale-[1.1] transition-all duration-300 object-cover h-full w-full" alt="" />
                            </div>
                            <Typography className='hover:text-green-700 cursor-pointer'>{text}</Typography>
                        </Box>
                    ))}

                </Stack>
            </div>

            {/* accordion of engagement ring */}
            <EngagementAccordion />

        </div>
    )
}

export default EngagementRing;