import React, { useEffect } from 'react';
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { Link, matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { BsCart3 } from "react-icons/bs";
import ProfileDropDown from '../core/Auth/profileDropDown';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { apiConnector } from '../../services/apiConnector';
import { categories } from '../../services/apis';

function Navbar() {

    const location = useLocation();

    const { token } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.profile);
    const { totalItems } = useSelector(state => state.cart);

    const [subLinks, setSubLinks] = useState([]);

    const fetchSubLinks = async () => {
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            console.log(result);
            setSubLinks(result?.data?.data);

        } catch (err) {
            console.log("Could not fetch categories list of navbar");
            console.log(err);

        }
    }

    useEffect(() => {
        fetchSubLinks();
    }, [])

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    return (
        <div className='w-full flex items-center justify-center h-14 border-b-[1px] border-richblack-700'>

            <div className='w-11/12 flex flex-row items-center px-20 justify-between'>

                {/* image logo */}
                <Link to={"/"}>
                    <img src={logo} className='h-8' />
                </Link>

                {/* nav links */}
                <nav>
                    <ul className='flex flex-row gap-5 items-center'>
                        {
                            NavbarLinks.map((link, index) => (
                                <li key={index} className='cursor-pointer text-richblack-25'>
                                    {
                                        link.title === "Catalog" ? (

                                            <div className='group relative'>

                                                <div className='flex flex-row items-center gap-1'>
                                                    <p>Catalog</p>
                                                    <IoIosArrowDown className='text-xl' />
                                                </div>

                                                <div className='absolute bg-richblack-5 invisible translate-x-[-50%] translate-y-[15%] z-10 lg:w-[300px] opacity-0 top-[50%] left-[50%] flex flex-col gap-3 group-hover:opacity-100 group-hover:visible  rounded-md p-4 transition-all duration-200  text-richblack-900'>
                                                    <div className='h-6 w-6 z-5 rotate-45 absolute left-[60%] top-[-6.5%] translate-x-[-50%] rounded-md bg-richblack-5'></div>
                                                    <div>
                                                        {
                                                            subLinks?.length ? (

                                                                subLinks?.map((item, index) => (
                                                                    <Link to={item?.path} key={index}>
                                                                        <div className=' hover:bg-richblack-50 px-5 rounded-lg py-2 transition-all duration-200'>{item?.name}</div>
                                                                    </Link>
                                                                ))
                                                            ) : (<div>No Data</div>)
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        ) : (<Link to={link?.path}><p className={`${matchRoute(link?.path) ? " text-yellow-25" : " text-richblack-25"}`}>{link.title}</p></Link>)
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* login / signup / Dashboard */}

                <div className='flex gap-x-5 items-center'>

                    {
                        user && user.accountType === "user" && (

                            < Link to="/dashboard/cart" className='relative'>

                                {/* cart icon */}
                                <BsCart3 className=' text-xl text-white ' />
                                {
                                    totalItems > 0 && (
                                        <span className='absolute top-[-50%] animate-bounce left-[50%] translate-x-[-50%] rounded-full h-5 text-richblue-900 w-5 text-sm text-center bg-richblack-50'>
                                            {totalItems}
                                        </span>
                                    )
                                }

                            </Link >
                        )

                    }

                    {
                        token === null ? (
                            <div className='flex flex-row gap-5'>

                                <Link to="/login" className='border-[1px] border-richblack-700 bg-richblack-800 rounded-md text-richblack-100 px-[12px] py-[8px]'>
                                    <button>Log in</button>
                                </Link>

                                <Link to="/signup" className='border-[1px] border-richblack-700 bg-richblack-800 rounded-md text-richblack-100 px-[12px] py-[8px]'>
                                    <button>Sign up</button>
                                </Link>
                            </div>
                        )
                            : (
                                <div>
                                    <ProfileDropDown />
                                </div>
                            )
                    }

                </div>

            </div>



        </div >
    )
}

export default Navbar