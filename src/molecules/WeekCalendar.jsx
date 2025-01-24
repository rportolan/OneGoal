import DayCalendar from "../atomes/DayCalendar";
import PropTypes from "prop-types";
const WeekCalendar = ({ weekDays }) => {
    return(
        <>
        <div className="flex">
            {weekDays.map((day, index) => (
                <DayCalendar 
                    key={index} 
                    date={day.date} 
                    isCurrentMonth={day.isCurrentMonth}
                    events={day.events} // Transmet les événements enrichis
                />
            ))}
        </div>
        </>
    )
}
WeekCalendar.propTypes = {
    weekDays: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.instanceOf(Date).isRequired,
        isCurrentMonth: PropTypes.bool.isRequired,
        events: PropTypes.arrayOf( // Ajoute la validation pour les événements
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            types: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
          })
        ),
      })
    ).isRequired,
  };
export default WeekCalendar;