import Input from "./Input"
import Select from "./Select";
import { useEffect, useState } from "react";

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

const Education = ({ sendEducation }) => {
    const [isDetailed, setIsDetailed] = useState(true);

    const [title, setTitle] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState('');
    const [beginMonth, setBeginMonth] = useState('');
    const [beginYear, setBeginYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [desc, setDesc] = useState('');

    const [isDeleted, setIsDeleted] = useState(false);

    const getBeginMonth = (date) => {
        setBeginMonth(date);
    }

    const getBeginYear = (date) => {
        setBeginYear(date);
    }

    const getEndMonth = (date) => {
        setEndMonth(date);
    }

    const getEndYear = (date) => {
        setEndYear(date);
    }

    const handleDelete = () => {
        setIsDeleted(true);
    };

    if (isDeleted) {
        return null;
    }

    const handleDetailed = () => {
        setIsDetailed(!isDetailed);
    }

    const updateEducationInputs = (attr, data) => {
        const setters = {
            'education-title': setTitle,
            'education-school': setSchool,
            'education-grade': setGrade,
        };
        const setter = setters[attr];
        if (setter) {
            setter(data);
        } else {
            Error('Unknown input');
        }
    }

    useEffect(() => {
        sendEducation();
    });

    return(
        <div title={title} school={school} grade={grade} beginmonth={beginMonth} beginyear={beginYear} endmonth={endMonth} endyear={endYear} desc={desc} className={`education-item layout-default ${isDetailed ? 'detailed' : ''}`}>
            <div className='roll-btn' onClick={handleDetailed}>
                <div className='heading poppins-semibold'>{school ? title + ',' : title} {grade ? school + ',' : school} {grade}</div>
                <i className={`chevron fa-solid fa-angle-${isDetailed ? 'up' : 'down'}`}></i>
            </div>
            <Input forAttr='education-title' label='Title' updateEducationInputs={updateEducationInputs}/>
            <Input forAttr='education-school' label='School' updateEducationInputs={updateEducationInputs}/>
            <Input forAttr='education-grade' label='Grade' updateEducationInputs={updateEducationInputs}/>
            <div className='date poppins-regular'>
                <span className='date-heading'>Begin Date</span>
                <Select getValue={getBeginMonth} forAttr='begin-month' label='Month' values={monthsValues}></Select>
                <Select getValue={getBeginYear} forAttr='begin-year' label='Year' values={yearValues}></Select>
            </div>
            <div className='date poppins-regular'>
                <span className='date-heading'>End Date</span>
                <Select getValue={getEndMonth} forAttr='end-month' label='Month' values={monthsValues}></Select>
                <Select getValue={getEndYear} forAttr='end-year' label='Year' values={yearValues}></Select>
            </div>
            <div contentEditable='true' onInput={ (e) => {
                let formattedText = e.target.innerHTML.replace(/<div>/g,"\n").replace(/<\/div>/g,"").replace(/<br>/g,"\n").replace(/&nbsp;/g, " ");
                setDesc(formattedText);
            } } className='description poppins-regular'></div>
            <i className="fa-solid fa-trash-can delete-btn" onClick={handleDelete}></i>
        </div>
    )
}

export default Education