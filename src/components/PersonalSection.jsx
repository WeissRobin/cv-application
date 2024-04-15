import { useEffect, useState } from 'react'
import Input from './Input'
import '../styles/FormSection.scss'
import '../styles/PersonalSection.scss'

const PersonalSection = ({ name, className, sendPersonalData }) => {
    const [isDetailed, setIsDetailed] = useState(false);
    const [personalData, setPersonalData] = useState({
        personal_name: '',
        personal_lastName: '',
        personal_email: '',
        personal_phone: '',
        personal_city: '',
        personal_state: '',
        personal_address: '',
        personal_birth: ''
    });

    const handleDetailed = () => {
        setIsDetailed(!isDetailed);
    }

    const handlePersonalData = (key, value) => {
        setPersonalData(prevData => ({
            ...prevData,
            [key]: value
        }));
    }

    useEffect(() => {
        sendPersonalData(personalData);
    }, [personalData]);

    return (
        <div className='cv-section-wrapper'>
            <section className='cv-section'>
                <h3 className='section-name poppins-semibold'>{name}</h3>
                <div className={`inputs ${className}`} style={{height: `${isDetailed ? '210px' : '105px'}`}}>
                    <Input forAttr='personal_name' label='Name' updatePersonalData={handlePersonalData}/>
                    <Input forAttr='personal_lastName' label='Last Name' updatePersonalData={handlePersonalData}/>
                    <Input forAttr='personal_email' label='Email' updatePersonalData={handlePersonalData}/>
                    <Input forAttr='personal_phone' label='Phone' updatePersonalData={handlePersonalData}/>
                    <Input forAttr='personal_city' label='City' updatePersonalData={handlePersonalData}/>
                    <Input forAttr='personal_state' label='State' updatePersonalData={handlePersonalData}/>
                    <Input forAttr='personal_adress' label='Adress' updatePersonalData={handlePersonalData}/>
                    <Input forAttr='personal_birth' label='Birth' updatePersonalData={handlePersonalData}/>
                </div>
            </section>
            <span onClick={handleDetailed} className='section-button poppins-semibold'>
                <i className={`fa-solid fa-angle-${isDetailed ? 'up' : 'down'}`}></i>
                {isDetailed ? 'Less options' : 'More options'}
            </span>
        </div>
    )
}

export default PersonalSection