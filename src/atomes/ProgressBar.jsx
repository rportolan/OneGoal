import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {

  const normalizedProgress = Math.min(Math.max(progress, 10), 100);

  const getProgressColor = (value) => {
    if (value <= 10) return "bg-red-800"; 
    if (value < 100) return "bg-sky-800"; 
    return "bg-green-800"; 
  };

  const progressColor = getProgressColor(normalizedProgress);

  return (
    <div className="relative mx-auto mt-8 w-full rounded-full h-4 bg-gray-200">
      <div
        className={`relative text-center h-full ${progressColor} rounded-full flex items-center justify-center`}
        style={{ width: `${normalizedProgress}%` }}
      >
        <p className="text-xs text-white">{normalizedProgress}%</p>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired, // progress doit être un nombre
};

export default ProgressBar;

