import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import '../styles/ExperienceSection.scss'
import '../styles/FormSection.scss'
import Experience from './Experience'

const ExperienceSection = ({name, className}) => {
    const [experienceList, setExperienceList] = useState([]);

    const addExperience = () => {
        setExperienceList(experienceList.concat(<Experience key={uuidv4()}/>));
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