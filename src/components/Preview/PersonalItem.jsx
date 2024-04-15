import '../../styles/PersonalItem.scss'

export const PersonalItem = ({ label, value }) => {
    return (
        <div className='personal-item'>
            <h3 className='item-heading'>{value ? label : ''}</h3>
            <span className='item-value'>{value}</span>
        </div>
    )   
}