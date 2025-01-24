import PropTypes from "prop-types"
const DayCalendar = ({ date , isCurrentMonth, events} ) => {
    // Calculer si le jour est aujourd'hui
    const today = new Date();
    const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

    return(
        <>
            <div className={`outline outline-1 outline-tertiary w-full h-40 ${isCurrentMonth ? "bg-primary" : "bg-secondary"}`}>
                <div className="h-full overflow-auto">
                    <span className={`text-xs m-2 ${isToday ? "text-fourly" : ""}`}>{date.getDate()}</span>
                    {/* Afficher les événements */}
                    {events.map((event, index) => (
                        <div
                        key={index}
                        className={`text-xxs rounded-lg p-1 m-1 ${
                            event.types === "objectif"
                            ? "bg-fourly text-white" // Vert pour les débuts
                            : event.types === "sous-objectif"
                            ? "bg-red-700 text-white" // Rouge pour les fins
                            : event.types === "tâche"
                            ? "bg-yellow-800"
                            : ""
                        }`}
                        >
                        {event.type === "start" && `Début : ${event.title}`}
                        {event.type === "end" && `Fin : ${event.title}`}
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}
DayCalendar.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    isCurrentMonth: PropTypes.bool.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,        // ID unique de l'événement
          title: PropTypes.string.isRequired,     // Titre de l'événement
          types: PropTypes.string.isRequired,      // Type d'évènements
          startDate: PropTypes.string.isRequired, // Date de début (format YYYY-MM-DD)
          endDate: PropTypes.string.isRequired,   // Date de fin (format YYYY-MM-DD)
          color: PropTypes.string.isRequired,     // Couleur pour l'affichage
        })
      ).isRequired,
}
export default DayCalendar;