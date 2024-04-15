import { useState } from "react";
import Education from "./Education";

import { v4 as uuidv4 } from 'uuid'

const EducationSection = ({name, className}) =>{
    const [educationList, setEducationList] = useState([]);

    const addEducation = () => {
        setEducationList(educationList.concat(<Education key={uuidv4()}/>));
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