import PropTypes from "prop-types";

const Input = ({ placeholder, type, label, id}) => {
    return(
        <div> 
            <label htmlFor={id} className='block text-xs'>{label}</label>
            <input 
                type={type}
                id={id}
                name={id}
                className='py-2 px-4 w-full border border-tertiary bg-secondary rounded-lg text-xs mt-2'
                placeholder={placeholder}
            />
        </div>
    )
}
Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
export default Input;