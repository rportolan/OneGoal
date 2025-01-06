import Day from "../atomes/Day";

import PropTypes from "prop-types";

const DaysGrid = ({ currentDate }) => {
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const daysInMonth = [];
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    daysInMonth.push(i);
  }

  return (
    <div className="grid grid-cols-7 gap-0.5">
      {daysInMonth.map((day) => (
        <Day key={day} day={day} />
      ))}
    </div>
  );
};

DaysGrid.propTypes = {
    currentDate: PropTypes.number.isRequired,
  };

export default DaysGrid;
