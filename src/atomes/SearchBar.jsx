import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <>
            <div className="flex justify-between border hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-tertiary border-tertiary rounded-xl py-2 w-80 mr-6 text-xs bg-secondary pr-2 pl-2 items-center">
            <input
            type="text"
            className="flex-grow bg-transparent outline-none"
            placeholder="Search..."
            />
            <button>
                <SearchIcon sx={{ fontSize: 20 }}/>
            </button>
        </div>
        </>
      
    );
  };
  
  export default SearchBar;
  