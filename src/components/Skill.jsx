import { useEffect, useState } from "react";

import Input from "./Input"
import Select from "./Select"

import '../styles/Skill.scss';

const selectValues = ['Expert', 'Experienced', 'Beginner', 'None'];

const Skill = ({ sendSkills }) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [skillName, setSkillName] = useState('');
    const [skillLevel, setSkillLevel] = useState('');

    const getLevel = (level) => {
        setSkillLevel(level);
        sendSkills();
    }
    
    const handleNameChange = (name) => {
        setSkillName(name);
        sendSkills();
    }

    const handleDelete = () => {
        setIsDeleted(true);
    }

    useEffect(() => {
        sendSkills();
    });

    if (isDeleted) {
        return null;
    }

    return (
        <div className="skill-item" name={skillName} level={skillLevel}>
            <Input forAttr='skill' label='Skill' updateSkill={handleNameChange}/>
            <Select getValue={getLevel} forAttr='skill-select' label='Choose level' values={selectValues}/>
            <i className="fa-solid fa-trash-can delete-btn" onClick={handleDelete}></i>
        </div>
    )
}

export default Skill