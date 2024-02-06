import React, { useEffect, useState } from 'react';
import exploreData from "../../../data/homepage-explore";
import HighlightText from './HighlightText';


function ExploreMore() {

    const tabsName = [
        "Free",
        "New to coding",
        "Most popular",
        "Skills paths",
        "Career paths",
    ];

    const [currTab, setCurrTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(exploreData[0].courses);
    const [currCard, setCurrCard] = useState(exploreData[0].courses[0].heading);


    const setCurrrentTab = (event) => {
        const value = event.target.innerText
        setCurrTab(value);
        const result = exploreData.filter((course) => course?.tag === value)
        setCourses(result[0]?.courses);
        setCurrCard(result[0]?.courses[0]?.heading);
    }


    return (
        <div className='w-full flex flex-col  items-center relative'>

            <div className='text-center text-4xl font-semibold'>
                Unlock the <HighlightText text={"Power of Code"} />
            </div>

            <p className='text-center text-richblack-300 font-semibold mt-3 text-lg'>Learn to Build Anything You Can Imagine</p>

            <div className='flex-row mb-5 bg-richblack-800 px-1 border-richblack-600 border-b-2 py-1 flex gap-2 items-center mt-5 rounded-full '>

                {
                    tabsName.map((tab, index) => (
                        <div onClick={setCurrrentTab} key={index} className={`rounded-full px-7 py-3 hover:text-richblack-5 hover:bg-richblack-900 transition-all duration-200 cursor-pointer text-[16px] ` + (currTab === tab ? "bg-richblack-900 font-medium text-richblack-5 " : "text-richblack-200")}>{tab}</div>
                    ))
                }

            </div>

            <div className='h-[200px]'></div>

            {/* card group */}
            <div className='flex flex-row items-center absolute -bottom-32 gap-10 justify-between w-full'>
                {
                    courses?.map((item, index) => (
                        <div key={index} className='z-[10] relative'>
                            <div className={`w-full h-full bg-yellow-50 top-3 left-3 absolute z-[-5] ` + (currCard === item?.heading ? "block " : " hidden")}></div>

                            <div onClick={() => { setCurrCard(item.heading) }} className={`flex  cursor-pointer w-[380px] h-[300px] flex-col justify-between p-5 ` + (currCard === item?.heading ? "bg-white " : " bg-richblue-700")}>
                                <div className='flex flex-col gap-5 items-start'>
                                    <p className={`font-semibold text-[20px]  ` + (currCard === item?.heading ? "text-black " : " text-richblack-25")}>{item?.heading}</p>
                                    <p className={`font-medium text-base ` + (currCard === item?.heading ? "text-richblack-400  " : " text-richblack-300 ")}>{item?.description}</p>
                                </div>

                                <div className={`flex flex-col gap-3 font-medium ` + (currCard === item?.heading ? "text-richblack-400 " : " text-richblack-300 ")}>
                                    <div className='border-dashed border-richblack-300 border-t-[2px]'></div>
                                    <div className='flex flex-row justify-between items-center'>
                                        <p>{item?.level}</p>
                                        <p>{item?.lessionNumber} Lesson</p>
                                    </div>
                                </div>

                            </div >
                        </div>


                    ))
                }
            </div>

        </div >
    )
}

export default ExploreMore;