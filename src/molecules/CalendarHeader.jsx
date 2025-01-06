import PropTypes from "prop-types";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const CalendarHeader = ({ currentDate, onPreviousMonth, onNextMonth }) => {
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={onPreviousMonth} className="px-2 py-1 border border-tertiary bg-secondary rounded-lg">
        <KeyboardArrowLeftIcon />
      </button>
      <h2 className="text-lg font-bold">{`${monthName} ${year}`}</h2>
      <button onClick={onNextMonth} className="px-2 py-1 border border-tertiary bg-secondary rounded-lg">
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

CalendarHeader.propTypes = {
    currentDate: PropTypes.number.isRequired,
    onPreviousMonth: PropTypes.string,
    onNextMonth: PropTypes.string,
  };

export default CalendarHeader;
