import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from "date-fns";

export const getDaysForMonth = (currentDate) => {
    const firstDayOfMonth = startOfMonth(currentDate) //premier jour du mois
    const lastDayOfMonth = endOfMonth(currentDate) //dernier jour du mois

    const firstDayToShow = startOfWeek(firstDayOfMonth) //premier jour à afficher
    const lastDayToShow = endOfWeek(lastDayOfMonth) //dernier jour à afficher

    const days = [];
    let day = firstDayToShow;

    while (day <= lastDayToShow) {
        days.push({
            date: day,
            isCurrentMonth: day >= firstDayOfMonth && day <= lastDayOfMonth
        })
        day = addDays(day, 1); // Passe au jour suivant
    }
    return days;
}

export const enrichDaysWithEvents = (days, events) => {
    return days.map((day) => {
      const formattedDate = day.date.toISOString().split("T")[0]; // Formater la date en YYYY-MM-DD
      const dayEvents = events.map((event) => {
        if (formattedDate === event.startDate) {
          return { ...event, type: "start" }; // Marquer comme début
        }
        if (formattedDate === event.endDate) {
          return { ...event, type: "end" }; // Marquer comme fin
        }
        return null;
      }).filter((event) => event !== null);
  
      return { ...day, events: dayEvents };
    });
  };
  