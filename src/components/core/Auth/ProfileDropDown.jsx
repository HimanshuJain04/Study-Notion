import React, { useState } from 'react';
import userImg from "../../../assets/Images/Instructor.png"
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { TbLogout } from "react-icons/tb";
import { MdDashboard } from 'react-icons/md'
import { AiOutlineSetting } from "react-icons/ai"

function ProfileDropDown() {

    const [showMenu, setShowMenu] = useState(false);
    // const imgRef = useRef();
    // const menuRef = useRef();

    const menu = [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />
        },
        {
            title: "Setting",
            path: "/setting",
            icon: <AiOutlineSetting />
        },
        {
            title: "Logout",
            path: "/logout",
            icon: <TbLogout />

        },
    ];

    // window.addEventListener('click', (e) => {

    // if (e.target !== menuRef.current && e.targte !== imgRef.current) {
    //     setShowMenu(false);
    // }

    // })

    return (
        <div className='relative z-10'>

            <div onClick={() => { setShowMenu(!showMenu) }}>
                <img src={userImg} alt='profile' className='h-10 w-10 rounded-full object-cover border-2 border-richblack-300 cursor-pointer' />
            </div>

            {
                showMenu && (
                    <div>
                        <div className='h-6 w-6 rounded-sm rotate-45 left-2 top-11 absolute  bg-richblack-700'></div>
                        <div className='bg-richblack-700 flex absolute top-[135%] left-[50%] translate-x-[-50%] flex-col text-richblack-50 font-normal px-2 py-2 rounded-md'>
                            {
                                menu?.map((item, index) => (
                                    <Link to={item?.path} key={index} className='flex flex-row items-center gap-2 cursor-pointer hover:bg-richblack-800 rounded-md px-5 py-2 transition-all duration-200'>
                                        <div>
                                            {item.icon}
                                        </div>
                                        <p className=' '>{item.title}</p>
                                    </Link>
                                ))
                            }
                        </div >
                    </div>


                )
            }


        </div >
    )
}

export default ProfileDropDown;