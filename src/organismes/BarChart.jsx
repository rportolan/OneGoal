import PropTypes from "prop-types";

const BarChart = ({ data, maxHeight }) => {
  return (
    <div className="p-4 ml-4 mr-4 border border-secondary rounded-lg">
        <h3 className="font-bold">Nombre d'objectif réalisé</h3>
      <div className="flex items-end justify-around h-64">
        {data.map((item, index) => (
          <div key={index} className="text-center ml-4 h-full flex flex-col justify-end">
            <div
              className="bg-fourly rounded-lg hover:bg-blue-700 transition-all duration-300"
              style={{
                height: `${(item.value / maxHeight) * 1000}%`,
                width: "40px",
              }}
              title={`${item.value} objectif réalisés`}
            ></div>
            <p className="mt-2 text-sm font-medium text-fively">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  maxHeight: PropTypes.number.isRequired,
};

export default BarChart;
