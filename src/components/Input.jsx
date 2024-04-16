import { useEffect, useState } from "react";
import '../styles/Input.scss';

const Input = ({ forAttr, label, updatePersonalData, updateSkill, updateExperienceInputs, updateEducationInputs }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }
    
    return (
        <div className='form-input'>
            <label className={`poppins-regular ${isFocused ? 'focused' : ''} ${inputValue ? 'set' : ''}`} htmlFor={forAttr}>{label}</label>
            <input onChange={(e) => { 
                if(forAttr.startsWith('personal')) {
                    updatePersonalData(forAttr, e.target.value);
                } else if (forAttr.startsWith('skill')) {
                    updateSkill(e.target.value);
                } else if (forAttr.startsWith('experience')) {
                    updateExperienceInputs(forAttr, e.target.value);
                } else if (forAttr.startsWith('education')) {
                    updateEducationInputs(forAttr, e.target.value);
                }
                setInputValue(e.target.value);
                }} onFocus={handleFocus} onBlur={handleBlur} className='poppins-regular input-field' id={forAttr} type="text" />
        </div>
    );
}

export default Input;
