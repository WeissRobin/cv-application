import '../styles/Hero.scss';

import CvButton from './CvButton';
import CvPaperAnimation from './CvPaperAnimation'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-main'>
                <span className='hero-description poppins-regular'>Create your own CV online</span>
                <h1 className='poppins-semibold'>Profilify</h1>
                <p className='poppins-regular'>Step Into a World of Career Advancement: Our Advanced Resume Creation Platform Provides You with the Tools and Resources Needed to Create Resumes that Reflect Your Unique Skills and Accomplishments. Elevate Your Job Search Experience and Unlock Exciting Opportunities in Your Desired Field.</p>
                <CvButton />
                <div className='cv-count poppins-regular'><div className='live-green'></div>Today we have created 4784 cvs</div>
            </div>
            <div className='hero-image'>
                <CvPaperAnimation />
            </div>
        </div>
    )
}

export default Hero