import TimerIcon from '@mui/icons-material/Timer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

const StopWatch = () => {
  return (
    <div className="w-1/3 p-4 rounded-lg border border-tertiary">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <TimerIcon />
                <h3 className="text-sm ml-2 font-bold">Suivi d'activité quotidienne</h3>
            </div>
        </div>
        <div className='mx-auto w-1/2 text-center mt-12'>
            <span className='text-4xl'>00.00.00</span>
        </div>
        <div className='flex items-center gap-1 justify-center mt-4'>
            <button className='w-3 h-3 rounded-full bg-white'></button>
            <button className='w-3 h-3 rounded-full bg-white'></button>
            <button className='w-3 h-3 rounded-full bg-fourly'></button>
            <button className='w-3 h-3 rounded-full bg-white'></button>
        </div>
        <div className='mx-auto w-1/2 text-center mt-2'>
            <span className='text-xs'>Pomodoro</span>
        </div>
        <div className='flex items-center justify-center gap-1 mt-8'>
            <button className="flex border border-fourly hover:bg-fourly hover:bg-opacity-15 rounded-xl py-1 pl-4 pr-6 items-center mr-4 ml-2 mb-8">
                <PlayArrowIcon className='text-fourly' />
                <span className="ml-1 text-xs text-fourly">Start</span>
            </button>

            <button className="flex border border-red-500 hover:bg-red-500 hover:bg-opacity-15 rounded-xl py-1 pl-4 pr-6 items-center mr-4 ml-2 mb-8">
                <StopIcon className='text-red-500'/>
                <span className="ml-1 text-xs text-red-500">Stop</span>
            </button>
        </div>
        


        
    </div>
  );
};

export default StopWatch;
