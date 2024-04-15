import PersonalSection from "./PersonalSection"
import SkillSection from "./SkillSection"
import ExperienceSection from "./ExperienceSection"
import EducationSection from "./EducationSection"

import '../styles/Form.scss'

const Form = ({ sendPersonalData, sendSkills }) => {
    return (
        <div className='form-wrapper'>
            <form className='form-flex'>
                <PersonalSection name='Personal Information' className='personal' sendPersonalData={sendPersonalData}/>
                <SkillSection name='Skills' className='skills-list' sendSkills={sendSkills}/>
                <ExperienceSection name='Experience' className='experience-list'/>
                <EducationSection name='Education' className='education-list'/>
            </form>
        </div>
    )
}

export default Form