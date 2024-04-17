import { useState } from 'react';

import './Reset.scss';

import PreviewPaper from '../src/components/PreviewPaper';
import Form from '../src/components/Form';

function App() {
  const [personalData, setPersonalData] = useState({});
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [profile, setProfile] = useState('');

  const handleExperiencesData = (data) => {
      setExperiences(data);
  }

  const handlePersonalData = (data) => {
      setPersonalData(data);
  }

  const handleSkillsData = (data) => {
      setSkills(data);
  }

  const handleEducationsData = (data) => {
      setEducations(data);
  }

  const handleProfileData = (data) => {
      setProfile(data);
  }

  return (
    <div className='generator-content'>
      <Form sendPersonalData={handlePersonalData} sendSkills={handleSkillsData} sendExperiences={handleExperiencesData} sendEducations={handleEducationsData} sendProfile={handleProfileData}/>
      <PreviewPaper personalData={personalData} skillsData={skills} experiencesData={experiences} educationsData={educations} profileData={profile} />
    </div>
  )
}

export default App