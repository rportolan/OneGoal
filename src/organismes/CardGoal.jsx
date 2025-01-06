import PropTypes from "prop-types";

import Tag from "../atomes/Tag";
import ProgressBar from "../atomes/ProgressBar";

const CardGoal = ({ titleGoal, status, progress }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case "en cours":
        return { bg: "bg-blue-950", border: "border-blue-900" };
      case "en attente":
        return { bg: "bg-red-950", border: "border-red-900" };
      case "terminé":
        return { bg: "bg-green-950", border: "border-green-900" };
    }
  };

  const { bg, border } = getStatusColor(status);

  return (
    <div className={`pb-8 px-4 m-1 ${bg} ${border} border rounded-2xl`}>
      <div className="flex items-center justify-between">
        <h3 className="mt-4 text-sm truncate overflow-hidden max-w-[70%]">{titleGoal}</h3>
        <Tag status={status} />
      </div>
      <div className="mt-4">
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

CardGoal.propTypes = {
  titleGoal: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default CardGoal;
