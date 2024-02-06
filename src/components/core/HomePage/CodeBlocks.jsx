import React from 'react';
import CTAButton from './Button';
import HighlightText from './HighlightText';
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';


function CodeBlocks({
    position, heading, subHeading, active, ctabtn1, ctabtn2, codeblock, bgGradient, codeclr
}) {

    console.log(active);

    return (
        <div className={`flex ${position} my-20 justify-between gap-10`}>

            {/* Section-1 */}
            <div className='w-[50%] flex flex-col gap-8'>

                <div className='text-4xl font-semibold'>{heading}</div>

                <div className='text-richblack-300 font-bold'>{subHeading}</div>


                <div className='flex gap-7 mt-7'>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} >
                        <div className='flex gap-2 items-center'>
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} >
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>


            </div>

            {/* Section-2 */}
            <div className='w-[100%] h-fit justify-start items-start flex py-4 lg:w-[700px]'>

                {/* bg-gradient */}

                {/* Couting */}
                <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>

                </div>

                {/* Code */}
                <div className={`w-[90%] flex flex-col font-bold font-mono relative ${codeclr} pr-2`}>
                    <TypeAnimation
                        sequence={[codeblock, 2000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace: "pre-line",
                                display: "block"
                            }
                        }
                        omitDeletionAnimation={true}

                    />
                    <div className={`absolute top-20 left-20 h-[1px] w-[1px] rounded-full ` + (active ? "shadow-[0px_0px_200px_100px_rgba(255,216,100,0.5)]" : "shadow-[0px_0px_200px_100px_rgba(197,199,212,0.5)]")}></div>
                </div>

            </div>

        </div>
    )
}

export default CodeBlocks;