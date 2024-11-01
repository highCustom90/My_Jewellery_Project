import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToggleDark, ToggleLight } from '../redux/theme/action';


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
    { name: 'ENGAGEMENT RINGS', to: '/', current: true },
    { name: 'WEDDING RINGS', to: '/wedding-ring', current: false },
    { name: 'DIAMONDS', to: '#', current: false },
    { name: 'GEMSTONES', to: '#', current: false },
    { name: 'JEWELRY', to: '/jewelry', current: false },
    { name: 'GIFTS', to: '#', current: false },
    { name: 'ABOUT', to: '/about', current: false },
<<<<<<< HEAD
    { name: 'USERS', to: '/users', current: false },
]
=======
];
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3

const userNavigation = [
    { name: 'SELECT COUNTRY' },
    { name: 'United State', url: "https://cdn-icons-png.flaticon.com/128/4628/4628635.png" },
    { name: 'United Arab', url: "https://cdn-icons-png.flaticon.com/128/5373/5373320.png" },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {


    const { theme } = useSelector((state) => state.themeReducer)

    const dispatch = useDispatch();

    const themeHandler = (e) => {
        if (e.target.checked) {
            dispatch(ToggleDark);

        } else {
            dispatch(ToggleLight);
<<<<<<< HEAD

=======
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
        }
    };

    return (
        <div>

            <Typography
                bgcolor={"#183e40"}
                className='text-white text-center p-1'
                sx={{ width: "100%", fontSize: '15px' }}
            >
                ENDS SOON! Receive Lab Diamond Studs With Purchase Over $1,000. Use Code STUDS in Cart.
            </Typography>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        className="h-8 w-8"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
<<<<<<< HEAD
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={themeHandler} />
=======
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={themeHandler} title='toggle theme' />
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                            </MenuButton>
                                        </div>
                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    <Link to={item.to}>{item.name}</Link>
                                </DisclosureButton>
                            ))}
                        </div>

                    </DisclosurePanel>
                </Disclosure>

                <header className="shadow text-center pt-2 pb-2 sm:hidden lg:block">
                    <div className='flex items-center justify-around w-full'>
                        <div className='flex w-[30%] justify-around items-center'>
                            <p className='cursor-pointer'>800.691.0952</p>
                            <p className='cursor-pointer'>Stores</p>
                            <p className='cursor-pointer'><OndemandVideoOutlinedIcon /> Virtual Appointment</p>
                        </div>

                        <div className='flex w-[30%] justify-around items-center'>
                            <Typography className='cursor-pointer flex items-center relative'>
                                <input
                                    type="text"
                                    placeholder="Type here you want"
                                    className={`input input-bordered input-sm w-full max-w-xs ${theme == "dark" ? "text-black" : "text-black"}`} />
                                <SearchIcon className='absolute right-3' />
                            </Typography>
                            <Typography className='cursor-pointer' to={'/'} title="Profile"><Link to={'/login'}><PersonIcon /></Link></Typography>
                            <Typography className='cursor-pointer' to={'/'}><FavoriteOutlinedIcon /></Typography>
                            <Typography className='cursor-pointer' to={'/'} title="wishlist"><Link to={'/wishlist'}><ShoppingBagOutlinedIcon /></Link></Typography>
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img alt="" src="https://cdn-icons-png.flaticon.com/128/395/395841.png" className="h-8 w-8 rounded-full" />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    {userNavigation.map((item, index) => (
                                        <MenuItem key={item.name}>
                                            {index == 0 ? <Typography
                                                className="flex items-center justify-around px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 overflow-hidden"
                                            >
                                                {item.name}
                                            </Typography>
                                                :
                                                <Typography
                                                    className="flex items-center justify-around px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 overflow-hidden"
                                                >
                                                    <img src={item.url} alt="" className='h-[30px] w-[30px]' />
                                                    {item.name}
                                                </Typography>
                                            }
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-center">
<<<<<<< HEAD
                        <div>
=======
                        <div data-aos="fade-down">
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
                            <Typography variant='h3'>HIGH CUSTOM</Typography>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default Navbar