import { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import '../styles/FormSection.scss'
import '../styles/SkillSection.scss'
import Skill from './Skill'

const SkillSection = ({ name, className, sendSkills }) => {
    const [skillList, setSkillList] = useState([]);

    const handleSkillsData = () => {
        let skillsArr = [];
        const allSkills = document.querySelectorAll('.skill-item');
        allSkills.forEach(skill => {
            const name = skill.getAttribute('name');
            const level = skill.getAttribute('level');
            skillsArr.push({name, level});
        });
        sendSkills(skillsArr);
    }

    const addSkill = () => {
        setSkillList(skillList.concat(<Skill sendSkills={handleSkillsData} key={uuidv4()} />));
    }

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