import { getDaysForMonth } from "../utils/dateUtils";
import PropTypes from "prop-types";
import WeekCalendar from "../molecules/WeekCalendar";
import { enrichDaysWithEvents } from "../utils/dateUtils";

const MonthCalendar = ({ currentDate, today, events }) => {
    const days = getDaysForMonth(currentDate);
    const enrichedDays = enrichDaysWithEvents(days, events); // Enrichir avec les événements
  
    const weeks = [];
    for (let i = 0; i < enrichedDays.length; i += 7) {
      weeks.push(enrichedDays.slice(i, i + 7));
    }
  
    const weekDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  
    return (
      <div className="ml-4 mr-4">
        {/* Affichage des jours de la semaine */}
        <div className="grid grid-cols-7 mt-2">
          {weekDays.map((day, index) => (
            <div key={index} className="text-center p-2 text-xs outline outline-1 outline-tertiary">
              {day}
            </div>
          ))}
        </div>
        {/* Affichage des semaines */}
        {weeks.map((week, index) => (
          <WeekCalendar key={index} weekDays={week} />
        ))}
      </div>
    );
  };
  
MonthCalendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date).isRequired,
    today: PropTypes.instanceOf(Date).isRequired, // Le jour actuel
    events: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,        // ID unique de l'événement
        title: PropTypes.string.isRequired,     // Titre de l'événement
        startDate: PropTypes.string.isRequired, // Date de début (format YYYY-MM-DD)
        endDate: PropTypes.string.isRequired,   // Date de fin (format YYYY-MM-DD)
        color: PropTypes.string.isRequired,     // Couleur pour l'affichage
        })
    ).isRequired,
};
  
export default MonthCalendar;