import PropTypes from "prop-types";

const Button = ( {iconButton} ) => {
    return(
        <>
            <button className="flex border border-red-500 hover:bg-red-500 hover:bg-opacity-15 rounded-xl pr-2 py-2 pl-4 items-center mr-4 ml-2 mb-8">
                {iconButton}
                <span className="ml-4 text-xs text-red-500">Se déconnecter</span>
            </button>
        </>
    )
}
Button.propTypes = {
    iconButton: PropTypes.node,
}
export default Button;