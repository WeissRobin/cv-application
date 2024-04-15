import { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import '../styles/FormSection.scss'
import '../styles/SkillSection.scss'
import Skill from './Skill'

const SkillSection = ({ name, className, sendSkillsData }) => {
    const [skillList, setSkillList] = useState([]);
    const [skillsData, setSkillsData] = useState([]);

    const handleSkillsData = (name, level) => {
        setSkillsData(prevData => [
            ...prevData,
            { name: name, level: level }
        ]);
        console.log(skillsData);
    }    

    const addSkill = () => {
        setSkillList(skillList.concat(<Skill updateSkillsData={handleSkillsData} key={uuidv4()} />));
    }

    useEffect(() => {
        sendSkillsData(skillsData);
    }, [skillsData]);

    return (
        <div className='cv-section-wrapper'>
            <section className='cv-section'>
                <h3 className='section-name poppins-semibold'>{name}</h3>
                <div className={className}>
                    {skillList}
                </div>
                <span onClick={addSkill} className='section-button add-skill poppins-semibold'>
                    <i className="fa-solid fa-plus"></i>
                    Add Skill
                </span>
            </section>
        </div>
    )
}

export default SkillSection