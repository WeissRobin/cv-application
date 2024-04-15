import { useState } from "react";
import '../styles/Select.scss';

const Select = ({ forAttr, label, values, getValue }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleSelect = (e) => {
        setInputValue(e.target.textContent);
        getValue(e.target.textContent);
    }

    const valueList = values.map(value => <li onMouseDown={handleSelect} className='context-item poppins-regular' key={value}>{value}</li>);

    return (
        <div className='form-input-select'>
            <label className={`poppins-regular ${isFocused ? 'focused' : ''} ${inputValue ? 'set' : ''}`} htmlFor={forAttr}>{label}</label>
            <input onFocus={handleFocus} onBlur={handleBlur} className='poppins-regular input-field' id={forAttr} type="button" value={inputValue}/>
            <i className="fa-solid fa-caret-down context-menu-btn" style={{color: `${isFocused ? '#e82a54' : ''}`}}></i>
            <ul className='context-menu' style={{display: `${isFocused ? 'block' : 'none'}`}}>
                {valueList}
            </ul>
        </div>
    );
}

export default Select;
