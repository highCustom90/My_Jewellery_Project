import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'


const jewelryCatImage = [
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fbe11266ca3b741fcabf53006c94f84ca",
        text: "Earrings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fc84d620123794a5c917fb278ce38dbbc",
        text: "Necklaces"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F401c67828cd242cdab46d72ec64e284b",
        text: "Braceletes"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F1d543a34b0f24f1b9a820090d2c82873",
        text: "Rings"
    },
]

const popularJewelry = [
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=289,height=335,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F1afcd5c13e884374bb8b0d64d0bd3bb7",
        text: "Diamond Studs"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=289,height=335,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F1482208c023440d7b78502c85be480c7",
        text: "Stackable Rings"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=289,height=335,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F8beab8abc68542a8ae3002769d33e582",
        text: "Tennis Bracelets"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=289,height=335,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F26ebfdd8fd48448c8a4d64bbe558cb27",
        text: "Gemstone Jewelry"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=289,height=335,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F8bdc741f56da44e7820a2f146deecddc",
        text: "Men's Jewelry"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=289,height=335,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fe246acb52e9e4a36939437045a6eb2d0",
        text: "Lab Diamond Jewelry"
    },
]

const meaningJewelry = [
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F413d7388d926449c99dd3691046e6614",
        text: "The Fairmined Gold Collection"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F20d09aa0c34f4eb5b4d6a9e60111b779",
        text: "Birthstone Jewelry"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F6642aa58d83f48448da7a88aabe986af",
        text: "Engravable Jewelry"
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F25d48bf6969846ecb25bdbe5c6b078ce",
        text: "Symbolic and Religious Jewelry"
    },
]

const jewelryCollections = [
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F1852b40974324bf4b669d8ab470052a8",
        text: ["The Sol Collection", "An exclusive capsule of fine jewelry designed to capture your distinctive style and story."]
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2F41c5e44bfb5e49f1a89e02942a2b6b77",
        text: ["The Essentials Edit", "It’s time to refresh your jewelry box with the latest in timeless must-haves."]
    },
    {
        url: "https://image.brilliantearth.com/cdn-cgi/image/width=443,height=513,quality=100,format=auto/https://cdn.builder.io/api/v1/image/assets%2F9f2a69003c86470ea05deb9ecb9887be%2Fd008a2ff99de4082ae32b8715773fab3",
        text: ["Cocktail Rings", "Live in color with our brightest and boldest designs."]
    },
]
const Jewelry = () => {
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
                            <Box className="lg:h-[441px] lg:w-[342px] sm:mb-5 sm:me-1" key={index}>
                                <div className='w-[342px] h-[396px]'>
                                    <img src={url} alt={text} className='h-full w-full' />
                                </div>
                                <Typography variant='h6' className='lg:mt-[24px] sm:mt-[10px]'>{text}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </div>

                <Box className="bg-custom-green mt-20 flex justify-center items-center sm:flex-wrap h-[135px] overflow-hidden">
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
                            <Box className='h-[293px] sm:mb-5' key={index}>
                                <div className='w-[220px] h-[254px]'>
                                    <img src={url} alt="" className='h-full w-full' />
                                </div>
                                <Typography variant='h6' mt={"10px"}>{text}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </div>


                <Stack direction={"row"} className='lg:justify-between sm:justify-center items-center mt-20 flex-wrap'>
                    <Box className="lg:h-[767px] lg:w-[712px] overflow-hidden sm:mb-8">
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

                    <Box className="lg:h-[767px] lg:w-[712px] overflow-hidden">
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
                            <Box className="lg:w-[342px] lg:h-[441px] sm:mb-5 sm:me-1" key={index}>
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
                            <Box className="w-[464px] sm:mb-5" key={index}>
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

                <Box height={"lg:280px"} className='mt-20 lg:pt-[56px] lg:pb-[56px] lg:ps-[100px] lg:pe-[100px] bg-custom-green flex lg:flex-col sm:flex-wrap items-center lg:justify-between text-white sm:p-8 sm:justify-center sm:text-center'>
                    <Typography variant='h2' fontSize='36px'>Our Sustainability</Typography>
                    <Typography margin={"10px"}>96% of our gold is recycled because we care about miners, their wages, their communities, and the environment.</Typography>
                    <button className='ps-[16px] pe-[16px] h-[44px] bg-white text-black' variant='contained'>Learn More</button>
                </Box>
            </div>
        </div>
    )
}

export default Jewelry;