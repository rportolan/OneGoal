import avatar from "../../public/avatar.webp";
const Avatar = () => {
    return(
        <>
        <button className="mr-4 hover:bg-tertiary hover:rounded-full p-1">
            <img className="w-10 h-10 rounded-full" src={avatar} alt="Avatar" />
        </button>
        </>
    )
}
export default Avatar;