import PersonalSection from "./PersonalSection"
import SkillSection from "./SkillSection"
import ExperienceSection from "./ExperienceSection"
import EducationSection from "./EducationSection"
import { ProfileSection } from "./ProfileSection"

import '../styles/Form.scss'

const Form = ({ sendPersonalData, sendSkills, sendExperiences, sendEducations, sendProfile }) => {
    return (
        <div className='form-wrapper'>
            <form className='form-flex'>
                <PersonalSection name='Personal Information' className='personal' sendPersonalData={sendPersonalData}/>
                <ProfileSection name='Profile' sendProfile={sendProfile}/>
                <SkillSection name='Skills' className='skills-list' sendSkills={sendSkills}/>
                <ExperienceSection name='Experience' className='experience-list' sendExperiences={sendExperiences}/>
                <EducationSection name='Education' className='education-list' sendEducations={sendEducations}/>
            </form>
        </div>
    )
}

export default Form