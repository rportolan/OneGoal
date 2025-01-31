import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PropTypes from "prop-types"
const ButtonAddElement = ({ text }) => {
    return(
        <button
            className="flex items-center text-fourly hover:text-opacity-70 text-sm text-xs">
            <AddCircleOutlineIcon className='mr-1.5' sx={{ fontSize: 16 }} />
            {text}
        </button>
    )
}
ButtonAddElement.propTypes = {
    text: PropTypes.string.isRequired,
}
export default ButtonAddElement