import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import '../styles/ExperienceSection.scss'
import '../styles/FormSection.scss'
import Experience from './Experience'

const ExperienceSection = ({ name, className, sendExperiences }) => {
    const [experienceList, setExperienceList] = useState([]);

    const handleExperienceData = () => {
        let experienceArr = [];
        const allExperiences = document.querySelectorAll('.experience-item');
        allExperiences.forEach(exp => {
            const name = exp.getAttribute('name');
            const company = exp.getAttribute('company');
            const location = exp.getAttribute('location');
            const contract = exp.getAttribute('contract');
            const beginmonth = exp.getAttribute('beginmonth');
            const beginyear = exp.getAttribute('beginyear');
            const endmonth = exp.getAttribute('endmonth');
            const endyear = exp.getAttribute('endyear');
            const desc = exp.getAttribute('desc');
            experienceArr.push({ name, company, location, contract, beginmonth, beginyear, endmonth, endyear, desc });
        });
        sendExperiences(experienceArr);
    }

    const addExperience = () => {
        setExperienceList(experienceList.concat(<Experience sendExperiences={handleExperienceData} key={uuidv4()}/>));
    }

    return (
        <div className='cv-section-wrapper'>
            <section className='cv-section'>
                <h3 className='section-name poppins-semibold'>{name}</h3>
                <div className={className}>
                    {experienceList}
                </div>
                <span onClick={addExperience} className='section-button add-skill poppins-semibold'>
                    <i className="fa-solid fa-plus"></i>
                    Add Experience
                </span>
            </section>
        </div>
    )
}

export default ExperienceSection