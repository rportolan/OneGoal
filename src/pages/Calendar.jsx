import { useState } from "react";
import MonthCalendar from "../organismes/MonthCalendar";
import { addMonths, subMonths } from "date-fns";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Calendar = () => {
  
  // Définir les événements ici
  const events = [
    {
      id: 1,
      title: "Apprendre le piano",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre le foot",
      types: "objectif",
      startDate: "2025-01-01",
      endDate: "2025-01-28",
      color: "blue",
    },
    {
      id: 1,
      title: "Apprendre la gamme de Do Majeur",
      types: "sous-objectif",
      startDate: "2025-01-02",
      endDate: "2025-01-02",
      color: "blue",
    },
    {
      id: 1,
      title: "Faire un gateaux",
      types: "tâche",
      startDate: "2025-01-25",
      endDate: "2025-01-28",
      color: "blue",
    },
    
  ];

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1); //permet de mettre une majuscule

  const [currentDate, setCurrentDate] = useState(new Date()); // Mois actuel dynamique
  const today = new Date(); //Mois actuel statique

  const currentDay = currentDate.getDate(); // Numéro du jour
  const currentMonthName = today.toLocaleString("fr-FR", { month: "short" }); //Mois actuel statique

  const year = currentDate.getFullYear(); //Année

  const monthNameLong = currentDate.toLocaleString("fr-FR", { month: "long" });
  const monthNameLongCapitalize = capitalize(monthNameLong);

  const monthNameShortCapitalize = capitalize(currentMonthName);

  return (
    <div>
      <h2 className='ml-4 py-9 font-bold'>Calendrier</h2>
      <div className=" ml-4 mr-4 outline outline-1 outline-tertiary rounded-t-lg border-tertiary p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="outline outline-1 outline-tertiary bg-secondary w-16 flex rounded-lg flex-col text-center">
            <span className="border-b border-tertiary p-1 text-xs rounded-t-lg">{monthNameShortCapitalize}</span>
            <span className="font-extrabold text-md p-2">{currentDay}</span>
          </div>
          <span className="ml-4">{monthNameLongCapitalize} {year}</span>
        </div>
        <div className="flex border bg-secondary border-tertiary rounded-lg w-48 justify-between">
          <button
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="p-1 border-r rounded-l-lg border-tertiary hover:bg-tertiary"
          >
            <NavigateBeforeIcon sx={{ fontSize: 18}} />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="p-1 hover:bg-tertiary w-full flex items-center justify-center"
          >
            <CalendarTodayIcon sx={{ fontSize: 16}}/>
            <span className="ml-4 text-sm">Today</span>
          </button>
          <button
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="p-1 border-l rounded-r-lg border-tertiary hover:bg-tertiary"
          >
            <NavigateNextIcon sx={{ fontSize: 18}} />
          </button>
        </div>
      </div>
      <MonthCalendar currentDate={currentDate} today={today} events={events} />
    </div>
    
  );
};

export default Calendar;
