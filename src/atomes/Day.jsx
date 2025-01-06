import PropTypes from "prop-types";

const Day = ({ day }) => {
  return (
    <div className="h-40 flex justify-end border border-tertiary rounded-lg hover:bg-tertiary transition-all duration-300">
      <span className="pr-3 pt-2">{day}</span>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.number.isRequired,
};

export default Day;

