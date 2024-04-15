import Input from "./Input"
import Select from "./Select"
import { useState } from "react";

import '../styles/Experience.scss'
import '../styles/Layout.scss'

//years
const currentYear = new Date().getFullYear();
const startYear = currentYear + 5;
const endYear = currentYear - 54;

const selectValues = ['Full-time', 'Part-time', 'Freelancer', 'Internship', 'Apprentice'];
const monthsValues = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const yearValues = [];

for (let year = startYear; year >= endYear; year--) {
    yearValues.push(year);
}

const Experience = () => {
    const [isDetailed, setIsDetailed] = useState(true);
    const [nameValue, setNameValue] = useState('');
    const [companyValue, setCompanyValue] = useState('');
    const [jobValue, setJobValue] = useState('');
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

    const handleNameChange = (value) => {
        setNameValue(value);
    }

    const handleCompanyChange = (value) => {
        setCompanyValue(value);
    }

    const handleJobChange = (value) => {
        setJobValue(value);
    }

    return (
        <div className={`experience-item layout-default ${isDetailed ? 'detailed' : ''}`}>
            <div className='roll-btn' onClick={handleDetailed}>
                <div className='heading poppins-semibold'>{companyValue ? nameValue + ',' : nameValue} {jobValue ? companyValue + ',' : companyValue} {jobValue}</div>
                <i className={`chevron fa-solid fa-angle-${isDetailed ? 'up' : 'down'}`}></i>
            </div>
            <Input forAttr='name' label='Name' onNameChange={handleNameChange}/>
            <Input forAttr='company' label='Company' onCompanyChange={handleCompanyChange}/>
            <Input forAttr='job-title' label='Job Title' onJobChange={handleJobChange}/>
            <Select forAttr='type-contract' label='Type of employment contract' values={selectValues}></Select>
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

export default Experience