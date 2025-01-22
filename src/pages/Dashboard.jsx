import DaysGrid from "../organismes/DaysGrid";
import BarChart from "../organismes/BarChart";
import StopWatch from "../organismes/StopWatch";
import { useState } from "react";

const Dashboard = () => {
  const sampleData = [
    { label: "Janvier", value: 4 },
    { label: "Février", value: 6 },
    { label: "Mars", value: 8 },
    { label: "Avril", value: 2 },
    { label: "Mai", value: 0 },
    { label: "Juin", value: 1 },
    { label: "Juillet", value: 4 },
    { label: "Août", value: 0 },
    { label: "Septembre", value: 1 },
    { label: "Octobre", value: 0 },
    { label: "Novembre", value: 0 },
    { label: "Décembre", value: 0 },
  ];
  const [days, setDays] = useState(
    Array.from({ length: 28 }, () => ({ worked: false }))
  ); // Initialise 30 jours sans travail

  const toggleDay = (index) => {
    const updatedDays = days.map((day, i) =>
      i === index ? { ...day, worked: !day.worked } : day
    );
    setDays(updatedDays);
  };
  return (
        <>
            <h2 className='ml-4 py-9 font-bold'>Dashboard</h2>  
            <div className="ml-4 mb-4 flex gap-4">
              <DaysGrid days={days} onDayClick={toggleDay} />
              <StopWatch />
            </div>
       
        </>
  );
}

export default Dashboard;