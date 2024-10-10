import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Loader from '../pages/Loader';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
// Engagement Image Changer Component
const EngagementImageChanger = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get('http://localhost:4500/api/images');
                const imageIds = res.data;
                const cloudinaryUrls = imageIds.map(({ public_id, format, display_name }) => {
                    return {
                        url: `https://res.cloudinary.com/dedhgrb2a/image/upload/${public_id}.${format}`,
                        display_name
                    }
                }
                );
                setImages(cloudinaryUrls);
                setLoading(false);
            } catch {
                setError('Error fetching images');
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return loading ? <Loader /> : (
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" className='mt-14 sm:justify-center'>
            {images.map(({ url, display_name }, index) => (
                <Box key={index} width="290px" height="376px" className="mb-8 text-center m-auto">
                    <Link to={`/singleprdetail/${display_name}`}>
                        <img src={url} alt={"text"} className='h-full w-full object-cover object-center' />
                    </Link>
                    <Typography>{display_name}</Typography>
                </Box>
            ))}
        </Stack>
    );
};

// Engagement FAQ Accordion Component
const EngagementAccordion = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (_, isExpanded) => setExpanded(isExpanded ? panel : false);

    const accordionData = [
        {
            panel: 'panel1',
            title: 'What are the most popular engagement ring settings?',
            details: <ul className='list-disc ms-9'>
                <li>Solitaire</li><li>Halo</li><li>Pavé</li><li>Channel</li><li>Three-stone</li><li>Bezel</li><li>Vintage</li>
            </ul>
        },
        {
            panel: 'panel2',
            title: 'How many prongs should an engagement ring have?',
            details: "Four-prong settings allow more diamond visibility, while six-prong settings provide more security."
        },
        {
            panel: 'panel3',
            title: 'What are the most durable engagement ring settings?',
            details: <ul className='list-disc ms-8'>
                <li>Prong setting</li><li>Bezel setting</li><li>Tension setting</li><li>Channel setting</li>
            </ul>
        },
        {
            panel: 'panel4',
            title: 'How do I choose the right metal for my engagement ring setting?',
            details: <ul className='list-disc ms-8'>
                <li>Durability: Platinum is the most durable</li><li>Color: Consider white, yellow, or rose gold</li>
                <li>Maintenance and budget considerations</li>
            </ul>
        },
        {
            panel: 'panel5',
            title: 'How does the setting of an engagement ring affect its overall cost?',
            details: <ul className='list-disc ms-8'>
                <li>Metal type: Platinum vs. gold</li><li>Complexity and customization of the setting</li>
            </ul>
        },
    ];

    return (
        <div className='mt-14'>
            <Accordion>
                <AccordionSummary>
                    <Typography variant='h5' className='w-full text-center'>
                        Engagement Ring Setting FAQs <KeyboardArrowDownIcon />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {accordionData.map(({ panel, title, details }) => (
                        <Accordion expanded={expanded === panel} onChange={handleChange(panel)} key={panel}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography><b>{title}</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>{details}</AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

// here accordian of mobile view of singleprdetails
const MobileAccordianView = () => {
    return (
        <Accordion className='lg:hidden sm:block'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

// here all about login functionality

// Initial Values
let signInInitialValues = { email: '', password: '' };
let createAccountInitialValues = { name: '', lastName: '', email: '', password: '', confirmPassword: '' };
// loginaccount func
async function createAccountFunc(values, { resetForm }) {
    try {
        const userAccVerify = await axios.post("http://localhost:4500/createacc/user", values);
        toast.success(userAccVerify.data.message, {
            hideProgressBar: true, // This enables the progress bar (default is true)
            closeOnClick: true,     // Close the toast on click
            autoClose: 1000,        // Close automatically after 1 second (1000 ms)
            pauseOnHover: false,    // Make sure the toast doesn't pause when hovered (optional)
            draggable: true,        // Allow the toast to be draggable (optional)
        });
    } catch (error) {
        toast.error(error?.response?.data?.message, {
            hideProgressBar: false, // This enables the progress bar (default is true)
            closeOnClick: true,     // Close the toast on click
            autoClose: 1000,        // Close automatically after 1 second (1000 ms)
            pauseOnHover: false,    // Make sure the toast doesn't pause when hovered (optional)
            draggable: true,        // Allow the toast to be draggable (optional)
        });
    } finally {
        resetForm();
        console.log("hasdfjlk")
    }
}
// singinaccount func email pass only
async function signInAccountFunc(values, { resetForm }) {
    try {
        const userAccVerify = await axios.post("http://localhost:4500/signin/user", values);
        toast.success(userAccVerify.data.message, {
            hideProgressBar: false, // This enables the progress bar (default is true)
            closeOnClick: true,     // Close the toast on click
            autoClose: 1000,        // Close automatically after 1 second (1000 ms)
            pauseOnHover: false,    // Make sure the toast doesn't pause when hovered (optional)
            draggable: true,        // Allow the toast to be draggable (optional)
        });
        localStorage.setItem("token", userAccVerify.data.token);
        resetForm();
    } catch (error) {
        toast.error(error.response.data.message || "Error Signing in");
        resetForm();
    }
}

// Validation Schemas
const signInValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Min 6 characters'),
});

const createAccountValidationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(3, 'Min 3 characters'),
    lastName: Yup.string().required('Last name is required').min(3, 'Min 3 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Min 6 characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});



// Export
export { createAccountFunc, createAccountInitialValues, createAccountValidationSchema, EngagementAccordion, EngagementImageChanger, signInAccountFunc, signInInitialValues, signInValidationSchema, MobileAccordianView };

