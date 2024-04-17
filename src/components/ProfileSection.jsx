import { useEffect, useState } from 'react';
import '../styles/FormSection.scss'

export const ProfileSection = ({name, sendProfile }) => {

    const [desc, setDesc] = useState('');

    useEffect(() => {
        sendProfile(desc);
    }, [desc])

    return (
        <div className='cv-section-wrapper'>
            <section className='cv-section'>
                <h3 className='section-name poppins-semibold'>{name}</h3>
                <div contentEditable='true' onInput={ (e) => {
                let formattedText = e.target.innerHTML.replace(/<div>/g,"\n").replace(/<\/div>/g,"").replace(/<br>/g,"\n").replace(/&nbsp;/g, " ");
                setDesc(formattedText);
            } } className='description poppins-regular'></div>
            </section>
        </div>
    )
}