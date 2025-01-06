import { useState } from "react";
import CalendarHeader from "../molecules/CalendarHeader";
import DaysOfWeek from "../atomes/DaysOfTheWeek";
import DaysGrid from "../molecules/DaysGrid";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="w-full rounded-lg pl-6 pr-6">
      <h2 className='py-9 font-bold'>Mon calendrier</h2>
      <CalendarHeader
        currentDate={currentDate}
        onPreviousMonth={goToPreviousMonth}
        onNextMonth={goToNextMonth}
      />
      <div className=" rounded-lg">
        <DaysOfWeek />
        <DaysGrid currentDate={currentDate} />
      </div>
      
    </div>
  );
};

export default Calendar;
