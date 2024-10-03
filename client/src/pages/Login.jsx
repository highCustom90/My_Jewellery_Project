import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { createAccountFunc, createAccountInitialValues, createAccountValidationSchema, signAccountFunc, signInInitialValues, signInValidationSchema } from '../utils/HelperFunctions';
import { useFormik } from 'formik';

const Login = () => {

    const [see, setSee] = useState({
        element1: false,
        element2: false,
        element3: false,
    });

    const handleClick = (element) => {
        setSee((prev) => ({ ...prev, [element]: !prev[element] }));
    }
    const createAccountFormik = useFormik({
        initialValues: createAccountInitialValues,
        validationSchema: createAccountValidationSchema,
        onSubmit: createAccountFunc
    })

    const signInFormik = useFormik({
        initialValues: signInInitialValues,
        validationSchema: signInValidationSchema,
        onSubmit: signAccountFunc
    });

    return (
        <div className="flex border border-blue-500 items-center h-screen justify-center sm:flex-col lg:flex-row">

            <div>
                <div>
                    <Typography variant="h4" pb={"10px"}>
                        My Account
                    </Typography>
                    <Typography fontWeight={"bold"}>Sign In</Typography>
                    <Typography fontWeight={"bold"}>
                        If you have a High Custom customer account, <br /> please sign in.
                    </Typography>
                </div>

                <form onSubmit={signInFormik.handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-12 w-[300px] sm:m-auto sm:mt-8">
                    {/* email field */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <label htmlFor="email1" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email1"
                                autoComplete="given-email"
                                className="block w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                                defaultValue={signInInitialValues.email}
                                onChange={signInFormik.handleChange}
                                onBlur={signInFormik.handleBlur}
                            />
                            {signInFormik.touched.email && signInFormik.errors.email ? <div style={{ color: 'red' }}>{signInFormik.errors.email}</div> : null}
                        </div>
                    </div>
                    {/* Password Field */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <label htmlFor="email1" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2 relative">
                            <input
                                type={see.element1 ? "text" : "password"}
                                name="password"
                                id="password1f"
                                autoComplete="given-email"
                                className="block w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your password"
                                defaultValue={signInInitialValues.password}
                                onChange={signInFormik.handleChange}
                                onBlur={signInFormik.handleBlur}
                            />
                            {see.element1 ? <RemoveRedEyeIcon className='absolute right-3 top-2' onClick={() => handleClick("element1")} /> : <VisibilityOffIcon className='absolute right-3 top-2' onClick={() => handleClick("element1")} />}
                            {signInFormik.touched.password && signInFormik.errors.password ? <div style={{ color: 'red' }}>{signInFormik.errors.password}</div> : null}
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <div className="mt-2 bg-custom-green text-center text-white">
                            <button className="p-2" type='submit'>
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Divider */}
            <div className="lg:flex items-center flex-col pe-[113px] ps-[123px] sm:hidden">
                <Typography className="w-[1px] border h-[200px]"></Typography>
                <Typography>OR</Typography>
                <Typography className="w-[1px] border h-[200px]"></Typography>
            </div>

            {/* Account Creation Form */}
            <div>
                <form className="mt-10 grid grid-cols-1 sm:grid-cols-12 w-[300px] m-auto" onSubmit={createAccountFormik.handleSubmit}>
                    {/* First Name Field */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="given-name"
                                className="block w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your name"
                                defaultValue={createAccountInitialValues.name}
                                onChange={createAccountFormik.handleChange}
                                onBlur={createAccountFormik.handleBlur}
                            />
                            {createAccountFormik.touched.name && createAccountFormik.errors.name ? <div style={{ color: 'red' }}>{createAccountFormik.errors.name}</div> : null}
                        </div>
                    </div>

                    {/* Last Name Field */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                className="block w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your last name"
                                defaultValue={createAccountInitialValues.lastName}
                                onChange={createAccountFormik.handleChange}
                                onBlur={createAccountFormik.handleBlur}
                            />
                            {createAccountFormik.touched.lastName && createAccountFormik.errors.lastName ? <div style={{ color: 'red' }}>{createAccountFormik.errors.lastName}</div> : null}
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="family-name"
                                className="block w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your last name"
                                defaultValue={createAccountInitialValues.email}
                                onChange={createAccountFormik.handleChange}
                                onBlur={createAccountFormik.handleBlur}
                            />
                            {createAccountFormik.touched.email && createAccountFormik.errors.email ? <div style={{ color: 'red' }}>{createAccountFormik.errors.email}</div> : null}
                        </div>
                    </div>

                    {/* password Field */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2 relative">
                            <input
                                type={see.element2 ? "text" : "password"}
                                name="password"
                                id="password"
                                autoComplete="password"
                                className="block w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your last name"
                                defaultValue={createAccountInitialValues.password}
                                onChange={createAccountFormik.handleChange}
                                onBlur={createAccountFormik.handleBlur}
                            />
                            {see.element2 ? <RemoveRedEyeIcon className='absolute right-3 top-2' onClick={() => handleClick("element2")} /> : <VisibilityOffIcon className='absolute right-3 top-2' onClick={() => handleClick("element2")} />}
                            {createAccountFormik.touched.password && createAccountFormik.errors.password ? <div style={{ color: 'red' }}>{createAccountFormik.errors.password}</div> : null}
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2 relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={see.element3 ? "text" : "password"}
                                autoComplete="password"
                                className="block w-full border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Confirm your password"
                                defaultValue={createAccountInitialValues.confirmPassword}
                                onChange={createAccountFormik.handleChange}
                                onBlur={createAccountFormik.handleBlur}
                            />
                            {see.element3 ? <RemoveRedEyeIcon className='absolute right-3 top-2' onClick={() => handleClick("element3")} /> : <VisibilityOffIcon className='absolute right-3 top-2' onClick={() => handleClick("element3")} />}
                            {createAccountFormik.touched.confirmPassword && createAccountFormik.errors.confirmPassword ? <div style={{ color: 'red' }}>{createAccountFormik.errors.confirmPassword}</div> : null}
                        </div>
                    </div>

                    {/* Create Account Button */}
                    <div className="sm:col-span-12 lg:col-span-12">
                        <div className="mt-2 bg-custom-green text-center text-white">
                            <button className="p-2 w-full" type="submit">
                                CREATE ACCOUNT
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
