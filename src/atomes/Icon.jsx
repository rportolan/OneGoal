import PropTypes from "prop-types";
const Icon = ({ iconPath }) => {
    return(
        <>
        <img src={iconPath} />
        </>
    )
}
Icon.propTypes = {
    iconPath: PropTypes.string.isRequired,

}
export default Icon