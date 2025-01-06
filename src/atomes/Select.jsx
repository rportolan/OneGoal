import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select = () => {
    return (
      <div className="relative">
        <select
          className="w-40 hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-tertiary appearance-none border border-tertiary rounded-xl text-xs bg-secondary py-2 px-2"
        >
          <option value="" disabled selected hidden>
            Status
          </option>
          <option value="option1">En cours</option>
          <option value="option2">En attente</option>
          <option value="option3">Terminé</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
        </div>
      </div>
    );
  };
  
  export default Select;
  