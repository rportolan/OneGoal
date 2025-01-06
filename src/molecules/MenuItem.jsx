import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MenuItem = ({ icon, titleMenu, to }) => {
    return(
        <> 
            <Link to={to}>
                <li className="flex mb-8 mr-4 p-2 hover:rounded-full hover:bg-secondary items-center">
                    
                        {icon}
                        <span className="ml-2 text-sm">{titleMenu}</span>
                     
                </li>
            </Link>
            
        </>
    )
}
MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    titleMenu: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}
export default MenuItem;