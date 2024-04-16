import { useState } from "react";
import Education from "./Education";

import { v4 as uuidv4 } from 'uuid'

const EducationSection = ({ name, className, sendEducations }) =>{
    const [educationList, setEducationList] = useState([]);

    const handleEducationData = () => {
        let educationArr = [];
        const allEducations = document.querySelectorAll('.education-item');
        allEducations.forEach(edu => {
            const title = edu.getAttribute('title');
            const school = edu.getAttribute('school');
            const grade = edu.getAttribute('grade');
            const beginmonth = edu.getAttribute('beginmonth');
            const beginyear = edu.getAttribute('beginyear');
            const endmonth = edu.getAttribute('endmonth');
            const endyear = edu.getAttribute('endyear');
            const desc = edu.getAttribute('desc');
            educationArr.push({ title, school, grade, beginmonth, beginyear, endmonth, endyear, desc });
        });
        sendEducations(educationArr);
    }

    const addEducation = () => {
        setEducationList(educationList.concat(<Education sendEducation={handleEducationData} key={uuidv4()}/>));
    }

    return(
        <div className='cv-section-wrapper'>
            <section className='cv-section'>
                <h3 className='section-name poppins-semibold'>{name}</h3>
                <div className={className}>
                    {educationList}
                </div>
                <span onClick={addEducation} className='section-button add-skill poppins-semibold'>
                    <i className="fa-solid fa-plus"></i>
                    Add Education
                </span>
            </section>
        </div>
    )
}

export default EducationSection