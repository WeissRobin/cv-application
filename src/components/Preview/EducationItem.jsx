import '../../styles/Preview/ItemLayout.scss'

export const EducationItem = ({ title, school, grade, beginmonth, beginyear, endmonth, endyear, desc }) => {
    return (
        <div className='preview-list-item'>
            <span className='item-heading'>{title}, {school}, {grade}</span>
            <span className='item-date'>{beginmonth} {beginyear} - {endmonth} {endyear}</span>
            <div className='item-desc'>{desc}</div>
        </div>
    )
}