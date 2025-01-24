import PropTypes from 'prop-types';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';

const CardStat = ({ titleCard, value, progress, isActive, descStat }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <>
            <div className="border border-secondary rounded-lg relative">
                <div className="flex items-center">
                    <div>
                        <h3 className="text-sm ml-4 w-64 h-12 mt-4 mb-2 mr-4">{titleCard}</h3>
                    </div>
                    <div
                        className="ml-4 mr-4 bg-primary p-1 rounded-full relative cursor-pointer"
                        onMouseEnter={() => setShowInfo(true)} // Afficher la modal
                        onMouseLeave={() => setShowInfo(false)} // Masquer la modal
                    >
                        <InfoIcon />
                        {showInfo && (
                            <div className="absolute top-10 right-0 bg-gray-800 text-white text-xs p-2 rounded shadow-lg z-10 w-48">
                                <p>{descStat}</p>
                            </div>
                        )}
                    </div>
                </div>
                <span className="text-4xl ml-4 font-extrabold flex">{value}</span>
                <div className="py-2 mt-8 bg-secondary flex justify-between items-center">
                    <span className="ml-4 text-xs text-fively">Last month</span>
                    <span className={`mr-2 px-2 py-1 rounded-md ${isActive ? 'text-green-500' : 'text-red-500'}`}>{progress}</span>
                    {isActive ? true : false}
                </div>
            </div>
        </>
    );
};

CardStat.propTypes = {
    titleCard: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    descStat: PropTypes.string.isRequired,
};

export default CardStat;
