import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const ButtonAddTask = () => {
    return(
        <div className='flex hover:outline hover:outline-1 hover:outline-offset-2 hover:outline-fourly ml-12 bg-fourly w-10 justify-center p-2 text-xxs rounded-xl'>
            <AddCircleOutlineIcon sx={{ fontSize: 18 }}/>
        </div>
    )
}
export default ButtonAddTask;
