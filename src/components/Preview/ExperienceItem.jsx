import '../../styles/Preview/ItemLayout.scss'

export const ExperienceItem = ({ name, company, location, contract, beginmonth, beginyear, endmonth, endyear, desc }) => {
    return (
        <div className='preview-list-item'>
            <span className='item-heading'>{name}, {company} ({contract}), {location}</span>
            <span className='item-date'>{beginmonth} {beginyear} - {endmonth} {endyear}</span>
            <div className='item-desc'>{desc}</div>
        </div>
    )
}