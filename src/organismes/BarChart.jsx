import { useState } from "react";
import PropTypes from "prop-types";
import BarChartIcon from "@mui/icons-material/BarChart";
import Select from "../atomes/Select";

const BarChart = ({ maxHeight, options, initialData }) => {
  const [selectedYear, setSelectedYear] = useState(options[0]?.value || ""); // Année par défaut
  const [data, setData] = useState(initialData);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year); // Met à jour l’année sélectionnée

    // Simule la récupération des données pour l'année
    const mockData = {
      "2023": [
        { label: "Jan", value: 4 },
        { label: "Fév", value: 6 },
        { label: "Mar", value: 8 },
        { label: "Avr", value: 2 },
        { label: "Mai", value: 9 },
        { label: "Jui", value: 0 },
        { label: "Jui", value: 4 },
        { label: "Aoû", value: 12 },
        { label: "Sep", value: 1 },
        { label: "Oct", value: 3 },
        { label: "Nov", value: 13 },
        { label: "Déc", value: 11 },
      ],
      "2024": [
        { label: "Jan", value: 2 },
        { label: "Fév", value: 7 },
        { label: "Mar", value: 1 },
        { label: "Avr", value: 0 },
        { label: "Mai", value: 3 },
        { label: "Jui", value: 1 },
        { label: "Jui", value: 4 },
        { label: "Aoû", value: 2 },
        { label: "Sep", value: 1 },
        { label: "Oct", value: 3 },
        { label: "Nov", value: 2 },
        { label: "Déc", value: 1 },
      ],
      "2025": [
        { label: "Jan", value: 4 },
        { label: "Fév", value: 6 },
        { label: "Mar", value: 8 },
        { label: "Avr", value: 2 },
        { label: "Mai", value: 9 },
        { label: "Jui", value: 1 },
        { label: "Jui", value: 4 },
        { label: "Aoû", value: 12 },
        { label: "Sep", value: 1 },
        { label: "Oct", value: 3 },
        { label: "Nov", value: 13 },
        { label: "Déc", value: 110 }, // Grande valeur pour tester
      ],
    };

    setData(mockData[year] || []); // Met à jour les données du graphique
  };

  // Calculer la valeur maximale dans les données actuelles
  const maxValue = Math.max(...data.map((item) => item.value), 1); // Empêche division par 0

  return (
    <div className="p-4 ml-4 h-full mr-4 border border-secondary rounded-lg">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <BarChartIcon className="text-fourly" />
          <h3 className="ml-2 text-xs sm:text-sm">Nombre d'objectifs réalisés</h3>
        </div>
        <div className="w-1/6">
          <Select
            optionName="Année"
            options={options}
            onChange={handleYearChange} // Gère le changement de l’année
          />
        </div>
      </div>

      <div className="flex items-end justify-around h-3/4">
        {data.map((item, index) => (
          <div
            key={index}
            className="text-center w-4/5 h-full items-center flex flex-col justify-end"
          >
            <p className="text-xs sm:text-sm mb-2">{item.value}</p>
            <div
              className="bg-fourly rounded-lg w-9/12"
              style={{
                height: `${(item.value / maxValue) * 100}%`, // Normalisation
              }}
              title={`${item.value} objectifs réalisés`}
            ></div>
            <p className="mt-2 text-xs sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

BarChart.propTypes = {
  maxHeight: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  initialData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChart;
