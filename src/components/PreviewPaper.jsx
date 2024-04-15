import '../styles/Preview.scss'
import { PersonalItem } from './Preview/PersonalItem';

const PreviewPaper = ({ personalData, skillsData }) => {
    const { personal_name, personal_lastName, personal_email, personal_phone, personal_city, personal_state, personal_adress, personal_birth } = personalData;
    const fullAdress = `${personal_city ? personal_adress + ', ' : personal_adress}${personal_state ? personal_city + ', ' : personal_city}${personal_state}`;

    return (
        <div className='preview-wrapper'>
            <div className='paper'>
                <aside className='side-panel'>
                    <div className='personal-info'>
                        <h2 className='aside-section-heading'>Personal information</h2>
                        <PersonalItem label='Adress' value={personal_adress === undefined ? '' : fullAdress}/>
                        <PersonalItem label='Phone' value={personal_phone}/>
                        <PersonalItem label='Email' value={personal_email}/>
                        <PersonalItem label='Date of birth' value={personal_birth}/>
                    </div>
                </aside>
                <main className='main-content'>
                    <div className='name'>{personal_name} {personal_lastName}</div>
                </main>
            </div>
        </div>
    )
}

export default PreviewPaper