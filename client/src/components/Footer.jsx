import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
const Footer = () => {
    const { theme } = useSelector((state) => state.themeReducer)
    return (
        <div className='mt-20'>
            <footer className={`${theme === 'dark' ? "bg-slate-950 text-white" : "bg-white text-black"} footer text-base-content p-10 container m-auto flex flex-wrap justify-between`}>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Our Story</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Orders</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Education</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Customer Service</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                        <Stack direction={'row'} justifyContent={"space-between"} className='mt-3 w-[150px]'>
                            <a href="https://www.instagram.com/highcustomjewellers/" title='chat with us' target='_blank'><InstagramIcon sx={{ "&:hover": { color: "#0d6363" } }} /></a>
                            <a href="https://www.facebook.com/highcustomjewellers" title='chat with us' target='_blank'><FacebookIcon sx={{ "&:hover": { color: "#0d6363" } }} /></a>
                            <a href="https://wa.link/dysgvc" title='contact with us' target='_blank'><WhatsAppIcon sx={{ "&:hover": { color: "#0d6363" } }} /></a>
                        </Stack>
                    </fieldset>
                </form>
            </footer>
        </div>
    )
}

export default Footer