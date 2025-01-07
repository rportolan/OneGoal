import Avatar from "../molecules/Avatar";
import LogoOneGoal from "../molecules/LogoOneGoal";
import NotificationsIcon from "../molecules/NotificationIcon";

const Header = () => {
    return(
        <>
            <header className="flex bg-primary mt-2 ml-2 mb-2 mr-4 rounded-xl items-center pb-4 pt-4 justify-between">
                <LogoOneGoal />
                <div className="flex items-center">
                <div className="mr-8">
                <NotificationsIcon />
                </div>
                <Avatar />
                </div>
            </header>
        </>
    )
}
export default Header;