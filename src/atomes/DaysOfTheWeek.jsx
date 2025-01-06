
const DaysOfWeek = () => {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <div className="grid grid-cols-7 gap-1 text-center font-medium mb-1">
      {days.map((day) => (
        <div key={day} className="py-2 border rounded-lg border-tertiary">
          {day}
        </div>
      ))}
    </div>
  );
};

export default DaysOfWeek;
