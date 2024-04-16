import Input from "./Input"
import Select from "./Select"
import { useEffect, useState } from "react";

import '../styles/Experience.scss'
import '../styles/Layout.scss'

//years
const currentYear = new Date().getFullYear();
const startYear = currentYear + 5;
const endYear = currentYear - 54;

const selects = ['Full-time', 'Part-time', 'Freelancer', 'Internship', 'Apprentice'];
const monthss = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = [];

for (let year = startYear; year >= endYear; year--) {
    years.push(year);
}

const Experience = ({ sendExperiences }) => {
    const [isDetailed, setIsDetailed] = useState(true);

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [contract, setContract] = useState('');
    const [beginMonth, setBeginMonth] = useState('');
    const [beginYear, setBeginYear] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [endYear, setEndYear] = useState('');
    const [desc, setDesc] = useState('');

    const [isDeleted, setIsDeleted] = useState(false);

    const getContract = (contract) => {
        setContract(contract);
    }

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

    const handleDetailed = () => {
        setIsDetailed(!isDetailed);
    }

    const updateExperienceInputs = (attr, data) => {
        const setters = {
            'experience-name': setName,
            'experience-company': setCompany,
            'experience-location': setLocation,
        };
        const setter = setters[attr];
        if (setter) {
            setter(data);
        } else {
            Error('Unknown input');
        }
    }

    useEffect(() => {
        sendExperiences();
    });

    if (isDeleted) {
        return null;
    }

    return (
        <div name={name} company={company} location={location} contract={contract} beginmonth={beginMonth} beginyear={beginYear} endmonth={endMonth} endyear={endYear} desc={desc} className={`experience-item layout-default ${isDetailed ? 'detailed' : ''}`}>
            <div className='roll-btn' onClick={handleDetailed}>
                <div className='heading poppins-semibold'>{company ? name + ',' : name} {location ? company + ',' : company} {location}</div>
                <i className={`chevron fa-solid fa-angle-${isDetailed ? 'up' : 'down'}`}></i>
            </div>
            <Input forAttr='experience-name' label='Title' updateExperienceInputs={updateExperienceInputs}/>
            <Input forAttr='experience-company' label='Company' updateExperienceInputs={updateExperienceInputs}/>
            <Input forAttr='experience-location' label='Location' updateExperienceInputs={updateExperienceInputs}/>
            <Select getValue={getContract} forAttr='type-contract' label='Employment Type' values={selects}></Select>
            <div className='date poppins-regular'>
                <span className='date-heading'>Begin Date</span>
                <Select getValue={getBeginMonth} forAttr='begin-month' label='Month' values={monthss}></Select>
                <Select getValue={getBeginYear} forAttr='begin-year' label='Year' values={years}></Select>
            </div>
            <div className='date poppins-regular'>
                <span className='date-heading'>End Date</span>
                <Select getValue={getEndMonth} forAttr='end-month' label='Month' values={monthss}></Select>
                <Select getValue={getEndYear} forAttr='end-year' label='Year' values={years}></Select>
            </div>
            <div contentEditable='true' onInput={ (e) => {
                let formattedText = e.target.innerHTML.replace(/<div>/g,"\n").replace(/<\/div>/g,"").replace(/<br>/g,"\n").replace(/&nbsp;/g, " ");
                setDesc(formattedText);
            } } className='description poppins-regular'></div>
            <i className="fa-solid fa-trash-can delete-btn" onClick={handleDelete}></i>
        </div>
    )
}

export default Experience