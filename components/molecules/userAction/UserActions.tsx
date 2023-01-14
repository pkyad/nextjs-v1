import useStyles from "./userAction.styles";
import useAppContext from "@/shared/hooks/useAppContext";
import useSession from "@/shared/hooks/useSession";

const UserActions = () => {

    const classess = useStyles();
    const appContext = useAppContext();

    const {user , clearSession} = useSession()

    const handleLogout = () => {
        clearSession();
        appContext?.navigateToSignIn()
    }


    return (
        <div className={classess.wrapper}>  
            <span>{user?.firstName}</span> <br />
            <span className="!cursor-pointer"><a  onClick={handleLogout} className={`${classess.logout}`}>Logout</a></span>
            
        </div>
    )
}

export default UserActions;