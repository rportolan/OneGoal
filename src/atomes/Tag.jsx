import PropTypes from "prop-types";

const Tag = ({ status }) => {

  const getStatusClass = (status) => {
    switch (status) {
      case "en cours":
        return "bg-sky-800 text-white";
      case "en attente":
        return "bg-red-800 text-white";
      case "terminé":
        return "bg-green-800 text-white";
    }
  };

  return (
    <span className={`mt-4 text-xxs p-2 rounded-full ${getStatusClass(status)}`}>
      {status}
    </span>
  );
};

Tag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Tag;
