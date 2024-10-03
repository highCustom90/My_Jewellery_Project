
import { faker } from '@faker-js/faker';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Stack, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


const EngagementImageChanger = () => {

    const [image, SetImage] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const initialImages = generateRandomImageUrl(200);
    //     SetImage(initialImages);
    // }, [])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get('http://localhost:4500/api/images'); // Replace with your backend URL
                SetImage(res.data); // Set images from the response
                console.log(res.data)
            } catch (err) {
                setError('Error fetching images');
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    // const generateRandomImageUrl = ((count) => {
    //     const width = 300; // Set desired width
    //     const height = 300; // Set desired height

    //     return Array.from({ length: count }, () => ({
    //         url: `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`,
    //         text: faker.person.firstName("male"),
    //     }))
    // })


    const handleMouseEnter = () => {
        //SetImage(generateRandomImageUrl(200));
    };

    const handleMouseLeave = () => {
        // SetImage(generateRandomImageUrl(200));
    };

    return (
        <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} alignItems={"center"} className='mt-14 sm:justify-center items-center'>
            {image.map(({ url, text }, index) => (
                <Box width={"290px"} height={"376px"} className="mb-8 text-center m-auto" key={index}>
                    <Link to={"/singleprdetail"}>
                        <img src={url} alt={text} className='h-full w-full object-cover object-center transition ease-in-out delay-75 duration-100' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                        <Typography>{text}</Typography>
                    </Link>
                </Box>
            ))}
        </Stack>
    )
}

const EngagementAccordian = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='mt-14'>
            <Accordion>
                <AccordionSummary>
                    <Typography className='w-full text-center' variant='h5'>Engagement Ring Setting FAQs <KeyboardArrowDownIcon /></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '40%', flexShrink: 0 }}>
                                <b>What are the most popular engagement ring settings?</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>The following are the most popular engagement ring settings:</Typography>
                            <ul className='list-disc ms-9'>
                                <li>Solitaire: A single diamond set on a plain metal band.</li>
                                <li>Halo: A central diamond surrounded by smaller diamonds.</li>
                                <li>Pavé: Small diamonds set closely together on the band.</li>
                                <li>Channel: Diamonds are set between two metal channels on the band.</li>
                                <li>Three-stone: Three diamonds symbolizing past, present, and future set on the band.</li>
                                <li>Bezel: A metal rim holds the diamond in place.</li>
                                <li>Vintage: An antique or vintage-inspired design featuring intricate details and engraving.</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '45%', flexShrink: 0 }}>
                                <b>How many prongs should an engagement ring have?</b>
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The most common number of prongs for an engagement ring is four or six. Four-prong settings are popular because they allow more of the diamond to be visible, while six-prong settings offer more security. Two-prong and three-prong settings are less common but can be used for smaller diamonds or alternative gemstones.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '45%', flexShrink: 0 }}>
                                <b>What are the most durable engagement ring settings?</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            When it comes to selecting an engagement ring setting, durability is a key factor to consider. Some of the most durable engagement ring settings include:
                            <ul className='list-disc ms-8'>
                                <li>Prong setting: This setting features small metal prongs that hold the diamond or gemstone securely in place. Prongs are typically made of platinum or 14k-18k white or yellow gold.</li>
                                <li>Bezel setting: In this setting, the diamond or gemstone is encircled by a metal band that secures it in place. Bezel settings can be full or partial, and they offer excellent protection for the stone.</li>
                                <li>Tension setting: A tension setting uses the pressure of the metal band to hold the diamond or gemstone in place. This setting creates the illusion that the stone is floating on the metal band, and it is a popular choice for modern engagement rings.</li>
                                <li>Channel setting: A channel setting is when the diamonds or gemstones are set flush with the metal band, which provides excellent protection for the stones.</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '45%', flexShrink: 0 }}>
                                <b>How do I choose the right metal for my engagement ring setting?</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Choosing the right metal for your engagement ring setting is a personal decision that depends on your style, budget, and lifestyle. Here are some factors to consider when selecting a metal for your engagement ring:</Typography>
                            <ul className='list-disc ms-8'>
                                <li>Durability: Consider the durability of the metal you choose, as you want your engagement ring to last a lifetime. Platinum is the most durable option, followed by 14k-18k gold.</li>
                                <li>Color: Choose a metal color that complements your skin tone and personal style. White gold and platinum are popular choices, but yellow gold and rose gold are also trendy.</li>
                                <li>Maintenance: Different metals require different maintenance. Platinum is low maintenance, while gold requires more upkeep.</li>
                                <li>Budget: The metal you choose will impact the cost of your engagement ring. Platinum is the most expensive option, while 14k-18k gold is more affordable.</li>
                            </ul>
                            <p>Ultimately, the right metal for your engagement ring setting is a personal decision. Consider your lifestyle, personal style, and budget when selecting a metal.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '45%', flexShrink: 0 }}>
                                <b>How does the setting of an engagement ring affect its overall cost?</b>
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>The setting of an engagement ring can greatly affect its overall cost. Here are some ways the setting can impact the price:</Typography>
                            <ul className='list-disc ms-8'>
                                <li>Metal type: The type of metal used for the setting can affect the price of the ring. Platinum is more expensive than gold, and a high karat gold setting will also cost more than a lower karat gold setting.</li>
                                <li>Complexity: A more complex setting with intricate details and embellishments will typically cost more than a simpler setting.</li>
                                <li>Diamond accents: If the setting includes diamond accents, this will also impact the price. The size and quality of the accent diamonds will affect the cost.</li>
                                <li>Customization: A custom-designed setting will likely cost more. However, a custom setting can be tailored to your specific preferences and can make your engagement ring unique.</li>
                                <p>Overall, it is important to consider the setting of the engagement ring when determining your budget. A higher-quality diamond may be more important to you than an elaborate setting, or vice versa. It ultimately comes down to personal preference and what you value most in an engagement ring.</p>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

const signInInitialValues = {
    email: '',
    password: '',
};

// Initial values for Create Account form
const createAccountInitialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

// here all login validation functionlity

function createAccountFunc(values) {
    console.log(values, "printed values")
}
function signAccountFunc(values) {
    console.log(values, "printed values")
}


const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
});

// Validation schema with Yup
const createAccountValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Minimum 3 characters'),
    lastName: Yup.string().required('Last name is required').min(3, 'Minimum 3 characters'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});



// UseFormik for Create Account form




export { EngagementAccordian, EngagementImageChanger, createAccountValidationSchema, signInValidationSchema, signAccountFunc, createAccountFunc, signInInitialValues, createAccountInitialValues };

