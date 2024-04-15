import { useEffect, useState } from 'react';

import './Reset.scss';

import PreviewPaper from '../src/components/PreviewPaper';
import Form from '../src/components/Form';

function App() {
  const [personalData, setPersonalData] = useState({});
  const [skills, setSkills] = useState([]);

  const handlePersonalData = (data) => {
      setPersonalData(data);
  }

  const handleSkillsData = (data) => {
      setSkills(data);
  }

  return (
    <div className='generator-content'>
      <Form sendPersonalData={handlePersonalData} sendSkills={handleSkillsData}/>
      <PreviewPaper personalData={personalData} skillsData={skills}/>
    </div>
  )
}

export default App