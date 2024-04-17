import React from 'react';

import { v4 as uuidv4 } from 'uuid'

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import '../styles/Preview.scss'
import { PersonalItem } from './Preview/PersonalItem';
import { SkillItem } from './Preview/SkillItem';
import { ExperienceItem } from './Preview/ExperienceItem';
import { EducationItem } from './Preview/EducationItem';

const PreviewPaper = ({ personalData, skillsData, experiencesData, educationsData, profileData }) => {
    //get data from components
    const { 
        personal_name, 
        personal_lastName, 
        personal_email, 
        personal_phone, 
        personal_city, 
        personal_state, 
        personal_adress, 
        personal_birth } = personalData;

    const handlePdfDownload = () => {
        const element = document.getElementById('preview'); // Nahraďte 'your-component-id' id vaší komponenty

    html2canvas(element, { scale: 5 })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); // Nastavení formátu na A4
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('cv.pdf');
        });
    }

    //full adress from personal data
    const fullAdress = `${personal_city ? personal_adress + ', ' : personal_adress}${personal_state ? personal_city + ', ' : personal_city}${personal_state}`;

    return (
        <div className='preview-wrapper'>
        <button onClick={handlePdfDownload} className='download poppins-semibold'>Download <i className="fa-regular fa-circle-down"></i></button>
            <div className='paper' id='preview'>
                <aside className='side-panel'>
                    <div className='personal-info'>
                        <h2 className='aside-section-heading'>Personal information</h2>
                        <PersonalItem label='Adress' value={personal_adress === undefined ? '' : fullAdress}/>
                        <PersonalItem label='Phone' value={personal_phone}/>
                        <PersonalItem label='Email' value={personal_email}/>
                        <PersonalItem label='Date of birth' value={personal_birth}/>
                    </div>
                    <div className='skills-info'>
                    <h2 className='aside-section-heading'>Skills</h2>
                        {skillsData.map(skill => {
                            const {name, level} = skill;
                            return <SkillItem key={uuidv4()} name={name} level={level}/>
                        })}
                    </div>
                </aside>
                <main className='main-content'>
                    <div className='name'>{personal_name} {personal_lastName}</div>
                    <div className='profile-info'>
                        <h2 className='main-section-heading'>Profile</h2>
                        <div className='profile-wrapper'>
                            {profileData}
                        </div>
                    </div>
                    <div className='experiences-info'>
                        <div className='main-section-heading'>Experience</div>
                        {experiencesData.map(exp => {
                            const { name, company, location, contract, beginmonth, beginyear, endmonth, endyear, desc } = exp;
                            return <ExperienceItem
                                key={uuidv4()} 
                                name={name} 
                                company={company} 
                                location={location} 
                                contract={contract} 
                                beginmonth={beginmonth} 
                                beginyear={beginyear} 
                                endmonth={endmonth} 
                                endyear={endyear}
                                desc={desc} />
                        })}
                    </div>
                    <div className='education-info'>
                        <h2 className='main-section-heading'>Education</h2>
                        {educationsData.map(edu => {
                            const { title, school, grade, beginmonth, beginyear, endmonth, endyear, desc } = edu;
                            return <EducationItem 
                                key={uuidv4}
                                title={title}
                                school={school}
                                grade={grade}
                                beginmonth={beginmonth}
                                beginyear={beginyear}
                                endmonth={endmonth}
                                endyear={endyear}
                                desc={desc}
                            />
                        })}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default PreviewPaper