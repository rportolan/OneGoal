import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const NotificationsIcon = () => {
    return(
        <>
            <button className="flex items-center justify-center w-16 h-10 hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-tertiary bg-secondary border border-tertiary rounded-lg">
                <span className='text-sm mr-1.5 text-red-400 '>2</span>
                <LocalFireDepartmentIcon className='text-red-400' sx={{ fontSize: 20}} />
            </button>
        </>
    )
}
export default NotificationsIcon;
