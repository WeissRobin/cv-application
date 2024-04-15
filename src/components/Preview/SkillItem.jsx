import '../../styles/Preview/SkillItem.scss';

export const SkillItem = ({ name, level }) => {
    return (
        <div className='preview-skill-item' style={{ display: `${name ? 'block' : 'none'}` }}>
            <span className='skill-name'>{name}</span>
            <div className='skill-progress-wrapper'>
                <div className='skill-progress' level={level}></div>
            </div>
        </div>
    );
}