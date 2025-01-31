import PropTypes from "prop-types"
const CardNewGoal = ({ iconCard, textCard, dateCard, children }) => {
    return(
        <div className='border bg-secondary mx-auto border-tertiary w-4/6 flex justify-between text-sm items-center rounded-xl p-4'>
            <div className="flex text-sm items-center">
                <div className='bg-fourly p-2 rounded-full'>
                    {iconCard}
                </div>
                <div className='ml-4'>
                    <h3>{textCard}</h3>
                    <p className='text-fively text-xs mt-2'>{dateCard}</p>
                </div>
            </div>
            <div className="flex justify-end w-1/3">
                {children}
            </div>
            
        </div>
    )
}
CardNewGoal.propTypes = {
    iconCard: PropTypes.node.isRequired, 
    textCard: PropTypes.string.isRequired,
    dateCard: PropTypes.string.isRequired,
    children: PropTypes.node,
}
export default CardNewGoal;