import React from "react";
import PropTypes from "prop-types";
import NotificationsIcon from "../molecules/NotificationIcon";
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';

const DaysGrid = ({ days, onDayClick }) => {
  return (
    <>
        <div className="w-1/3 p-4 rounded-lg border border-tertiary">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <CalendarViewMonthIcon />
                <h3 className="text-sm ml-2 font-bold">Suivi d'activité quotidienne</h3>
            </div>
            
            <NotificationsIcon />
        </div>
        
        <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
                <div
                key={index}
                className={`border border-tertiary bg-secondary h-8 rounded cursor-pointer ${
                    day.worked ? "bg-blue-500" : "bg-gray-200"
                } hover:bg-blue-300 transition`}
                onClick={() => onDayClick(index)}
                ></div>
            ))}
        </div>
        
        </div>
    </>
    
  );
};

DaysGrid.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      worked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDayClick: PropTypes.func.isRequired,
};

export default DaysGrid;
