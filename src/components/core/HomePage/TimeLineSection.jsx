import React from 'react';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timeLineImg from "../../../assets/Images/TimelineImage.png"

function TimeLineSection() {

    const timeLineArray = [
        {
            logo: Logo1,
            heading: "Leadership",
            desc: "Fully committed to the success company"
        },
        {
            logo: Logo2,
            heading: "Responsibility",
            desc: "Students will always be our top priority"
        },
        {
            logo: Logo3,
            heading: "Flexibility",
            desc: "The ability to switch is an important skills"
        },
        {
            logo: Logo4,
            heading: "Solve the problem",
            desc: "Code your way to a solution"
        }
    ];

    return (
        <div className='mt-20'>
            <div className=' flex flex-row  gap-16 items-center'>

                <div className='flex-col flex gap-3 w-[45%]'>
                    {
                        timeLineArray.map((item, index) => (
                            <div key={index}>

                                <div className='flex flex-row gap-6 items-start'>

                                    <div className='flex flex-col gap-3 items-center justify-start'>
                                        <div className='w-[50px] rounded-full h-[50px] bg-white flex items-center justify-center'>
                                            <img src={item?.logo} />
                                        </div>
                                        <div className={`h-14 w-[1px] border-l-[1px] border-dotted border-richblack-200 ` + (index >= 3 ? " hidden" : " block")}></div>
                                    </div>

                                    <div className='flex flex-col items-start justify-start'>
                                        <p className='font-semibold text-[18px]'>{item.heading}</p>
                                        <p className='text-base'>{item.desc}</p>
                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

                <div className='relative  z-[10] shadow-[0px_0px_10px_3px_rgba(71,165,197,1)] '>
                    <div className='w-full h-full bg-white z-[-5] top-5 -right-5 absolute shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)] '></div>

                    <img src={timeLineImg} className='shadow-white shadow-md object-cover h-fit' alt="TimeLineImage" />

                    <div className='absolute left-[50%] translate-x-[-50%] -bottom-14 self-center bg-caribbeangreen-700 px-5 flex flex-row py-10 text-white uppercase'>

                        <div className='flex flex-row gap-10 items-center px-10 border-r-[1px] border-caribbeangreen-300'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='w-[100px] text-caribbeangreen-300 text-sm'>Years Experience</p>
                        </div>

                        <div className='flex flex-row gap-10 px-10 items-center'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='w-[100px] text-caribbeangreen-300 text-sm'>Type of Courses</p>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default TimeLineSection