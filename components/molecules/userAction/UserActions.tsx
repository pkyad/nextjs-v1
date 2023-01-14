import useStyles from "./userAction.styles";
import useAppContext from "@/shared/hooks/useAppContext";

const UserActions = () => {

    const classess = useStyles();
    const { navigateToSignIn, user } = useAppContext();


    const handleLogout = () => {
        if (navigateToSignIn) {
            navigateToSignIn()
        }
    }

    return (
        <div className={classess.wrapper}>
            <span>{user?.firstName}</span> <br />
            <span className="!cursor-pointer"><a onClick={handleLogout} className={`${classess.logout}`}>Logout</a></span>

        </div>
    )
}

export default UserActions;