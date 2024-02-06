import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa"
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ReviewSlider from '../components/core/HomePage/ReviewSlider';
import Footer from "../components/common/Footer";
import ExploreMore from '../components/core/HomePage/ExploreMore';

function Home() {
    return (
        <div>

            {/* Section-1 */}
            <div className='relative  mx-auto flex max-w-maxContent flex-col w-11/12 items-center text-white justify-between '>

                {/* become instructor button */}
                <Link to={"/signup"}>
                    <div className='border-b-[1px] border-richblack-600 hover:border-none mx-auto group p-1 mt-10 rounded-full bg-richblack-800 font-bold w-fit text-richblack-200 transition-all duration-200 hover:scale-95'>
                        <div className='flex flex-row group-hover:bg-richblack-900 justify-center px-10 py-[5px] rounded-full gap-2 transition-all duration-200  items-center'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                {/* heading */}
                <div className='text-4xl font-semibold text-center mt-7 '>Empower Your Future with
                    <HighlightText text={"Coding Skills"} />
                </div>

                {/* subHeading */}
                <div className='text-center mt-4 text-richblack-300 w-[90%] text-lg font-bold'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                {/* Two Button */}
                <div className='flex flex-row gap-7 mt-8 '>
                    <CTAButton linkto={"/signup"} active={true}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                {/* Video */}
                <div className='my-12 mx-3  relative  z-[10]'>

                    <div className='w-full h-full bg-white z-[-5] top-5 -right-5 absolute'></div>

                    <video
                        className='shadow-[0px_0px_30px_10px_rgba(71,165,197,0.4)] text-bl'
                        muted
                        loop
                        autoPlay
                    >
                        <source src={banner} type='video/mp4' />
                    </video>
                </div>

                {/* Code Section-1 */}
                <div className='relative'>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        active={true}
                        heading={<>Unlock your <HighlightText text={"coding potential"} /> with our online courses.</>}
                        subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={
                            {
                                btnText: "Try it Yourself",
                                linkto: "/signup",
                                active: true
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false
                            }
                        }
                        codeblock={`<!DOCTYPE html>
                            <html lang="en">
                            <head>
                            <title>This Is My Page</title>
                            </head>
                            <body>
                            <h1>Heading<h1/>
                            </body>
                            </html>
                        `}
                        codeclr={"text-yellow-25"}
                    />
                </div>

                {/* Code Section-2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        active={false}
                        heading={<>Start <HighlightText text={"coding in seconds"} /></>}
                        subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                        ctabtn1={
                            {
                                btnText: "Continue Lesson",
                                linkto: "/signup",
                                active: true
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false
                            }
                        }
                        codeblock={`import React, { useState } from 'react';
                        function Counter() {
                          const [count, setCount] = useState(0);
                          return (
                            <div>
                              <p>Count: {count}</p>
                              <button onClick={() => setCount(count + 1)}>Increment</button>
                            </div>
                          )}
                        export default Counter;`}
                        codeclr={"text-white"}
                    />
                </div>

                <ExploreMore />

            </div>


            {/* Section-2 */}
            <div className='bg-pure-greys-5 text-richblack-700 pb-20'>

                <div className='h-[320px] homepage_bg'>

                    <div className='w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto '>

                        <div className='h-[150px]'></div>

                        <div className='flex flex-row gap-7 text-white'>

                            <CTAButton linkto={"/signup"} active={true}>
                                <div className='flex items-center gap-2'>Explore Full Catalog  <FaArrowRight /></div>
                            </CTAButton>

                            <CTAButton linkto={"/signup"} active={false}>
                                <div className='flex items-center gap-2'>Learn More</div>
                            </CTAButton>

                        </div>
                    </div>
                </div>

                <div className='w-11/12 mx-auto gap-7 max-w-maxContent flrx flex-col justify-between items-center'>

                    <div className='flex flex-row items-start mt-20 justify-between gap-5'>

                        <div className='w-[45%] text-4xl font-semibold'>Get the skills you need for a <HighlightText text={"job that is in demand"} />.</div>

                        <div className='flex flex-col gap-10 w-[37%] items-start text-[16px]'>
                            <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                            <div className='flex '>
                                <CTAButton active={true} linkto={"/signup"}>
                                    Learn More
                                </CTAButton>
                            </div>
                        </div>

                    </div>

                    <TimeLineSection />

                    <LearningLanguageSection />

                </div>



            </div>

            {/* Section-3 */}
            <div className='bg-richblack-900 text-white'>
                <div className='w-11/12 mx-auto max-w-maxContent flex-col justify-between gap-10 flex items-center'>

                    <InstructorSection />

                    <p className='text-center text-4xl font-semibold mt-10'>Review from other learners</p>

                    <ReviewSlider />

                </div>

            </div>

            {/* Footer */}
            <Footer></Footer>

        </div>
    )
}

export default Home;