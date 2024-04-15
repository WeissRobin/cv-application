import Input from "./Input"
import Select from "./Select";
import { useState } from "react";

import '../styles/Education.scss'
import '../styles/Layout.scss'

const currentYear = new Date().getFullYear();
const startYear = currentYear + 5;
const endYear = currentYear - 54;

const monthsValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const yearValues = [];

for (let year = startYear; year >= endYear; year--) {
    yearValues.push(year);
}

const Education = () => {
    const [isDetailed, setIsDetailed] = useState(true);
    const [titleValue, setTitleValue] = useState('');
    const [schoolValue, setSchoolValue] = useState('');
    const [classValue, setClassValue] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);

    const handleDelete = () => {
        setIsDeleted(true);
    };

    if (isDeleted) {
        return null;
    }

    const handleDetailed = () => {
        setIsDetailed(!isDetailed);
    }

    const handleTitleChange = (value) => {
        setTitleValue(value)
    }

    const handleSchoolChange = (value) => {
        setSchoolValue(value)
    }

    const handleClassChange = (value) => {
        setClassValue(value)
    }

    return(
        <div className={`education-item layout-default ${isDetailed ? 'detailed' : ''}`}>
            <div className='roll-btn' onClick={handleDetailed}>
                <div className='heading poppins-semibold'>{schoolValue ? titleValue + ',' : titleValue} {classValue ? schoolValue + ',' : schoolValue} {classValue}</div>
                <i className={`chevron fa-solid fa-angle-${isDetailed ? 'up' : 'down'}`}></i>
            </div>
            <Input forAttr='title' label='Title' onTitleChange={handleTitleChange}/>
            <Input forAttr='school' label='School' onSchoolChange={handleSchoolChange}/>
            <Input forAttr='clasification' label='Clasification' onClassChange={handleClassChange}/>
            <div className='date poppins-regular'>
                <span className='date-heading'>Begin Date</span>
                <Select forAttr='begin-month' label='Month' values={monthsValues}></Select>
                <Select forAttr='begin-year' label='Year' values={yearValues}></Select>
            </div>
            <div className='date poppins-regular'>
                <span className='date-heading'>End Date</span>
                <Select forAttr='end-month' label='Month' values={monthsValues}></Select>
                <Select forAttr='end-year' label='Year' values={yearValues}></Select>
            </div>
            <textarea className='description poppins-regular' cols="20" rows="8"></textarea>
            <i className="fa-solid fa-trash-can delete-btn" onClick={handleDelete}></i>
        </div>
    )
}

export default Education