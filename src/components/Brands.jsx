import '../styles/Brands.scss'
import Tesla from '../assets/1.webp'
import Levis from '../assets/2.webp'
import Amazon from '../assets/3.webp'

export const Brands = () => {
    return (
        <section className='brands-wrapper'>
            <h2 className='poppins-semibold'>Our professional resumes secure jobs for people in the best companies.</h2>
            <div className='brands-flexbox'>
                <div className='brand-item'>
                    <img className='logo-image' src={Tesla} alt="Tesla" />
                    <span className='brand-count poppins-regular'>61,550+</span>
                </div>
                <div className='brand-item'>
                    <img className='logo-image' src={Levis} alt="Levis" />
                    <span className='brand-count poppins-regular'>73,970+</span>
                </div>
                <div className='brand-item'>
                    <img className='logo-image' src={Amazon} alt="Amazon" />
                    <span className='brand-count poppins-regular'>35,810+</span>
                </div>
            </div>
        </section>
    )
}