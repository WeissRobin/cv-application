export const SkillItem = ({ name, level }) => {
    return(
        <div className='preview-skill-item'>
            <span className='skill-name'>{name}</span>
            <div className='skill-meter'>{level}</div>
        </div>
    ) 
}