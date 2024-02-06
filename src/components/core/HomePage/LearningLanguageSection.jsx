import React from 'react';
import HighlightText from './HighlightText';
import CTAButton from './Button';
import Img1 from "../../../assets/Images/Know_your_progress.svg"
import Img2 from "../../../assets/Images/Compare_with_others.svg"
import Img3 from "../../../assets/Images/Plan_your_lessons.svg"

function LearningLanguageSection() {
    return (
        <div className='mt-40'>
            <div className='flex flex-col items-center gap-3'>

                <div className='text-4xl font-semibold text-center'>Your swiss knife for <HighlightText text={"learning any language"} /></div>

                <div className='text-richblack-600 mx-auto font-medium text-base w-[65%] text-center'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>

                <div className='flex flex-row items-center relative justify-center mt-5'>
                    <img alt="Image1" className='object-contain -mr-32' src={Img1} />
                    <img alt="Image2" className='object-contain' src={Img2} />
                    <img alt="Image3" className='object-contain -ml-36' src={Img3} />
                </div>

                <div className=''>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                </div>
            </div>
        </div>
    )
}

export default LearningLanguageSection