import { useEffect, useState } from 'react';

import './Reset.scss';

import PreviewPaper from '../src/components/PreviewPaper';
import Form from '../src/components/Form';

function App() {
  const [personalData, setPersonalData] = useState({});
  const [skillsData, setSkillsData] = useState([]);

  const handlePersonalData = (data) => {
      setPersonalData(data);
  }

  const handleSkillsData = (data) => {
      setSkillsData(data);
  }

  return (
    <div className='generator-content'>
      <Form sendPersonalData={handlePersonalData} sendSkillsData={handleSkillsData}/>
      <PreviewPaper personalData={personalData} skillsData={skillsData}/>
    </div>
  )
}

export default App