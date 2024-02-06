import React from 'react';
import InstructorImg from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';

function InstructorSection() {
    return (
        <div className='mt-20 w-full'>
            <div className='flex flex-row gap-20 items-center w-full'>
                {/* Left Div for image */}

                <div className='w-[50%] z-[10] relative'>
                    <img src={InstructorImg} alt="Instructor-Image" className='w-full' />
                    <div className='w-full h-full z-[-5] bg-white -top-5 right-5 absolute'></div>
                </div>

                {/* Right Div for Content */}
                <div className='w-[50%] gap-10 flex flex-col '>

                    <div className='text-4xl font-semibold'>Become an <br /> <HighlightText text={"instructor"} /> </div>
                    <p className='font-medium text-[16px] w-[90%] text-richblack-300'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>

                    <div className='flex items-center'>

                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-2'>
                                <p> Start Teaching Today</p>
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default InstructorSection;