import PropTypes from "prop-types";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select = ({ onChange, optionName, options}) => {
  
    return (
      <div className="relative">
        <select
          className="w-full hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-tertiary appearance-none border border-tertiary rounded-xl text-xxs sm:text-xs bg-secondary py-2 px-2"
          onChange={onChange}
        >
          <option value="" disabled selected hidden>
            {optionName}
          </option>
          {options.map((option) =>
          <option key={option.id} value={option.value}>{option.value}</option>
          )}
           
          
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
        </div>
      </div>
    );
  };

  Select.propTypes = {
    optionName: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
  }
  
  export default Select;
  