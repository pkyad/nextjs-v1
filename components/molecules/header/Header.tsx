import Logo from '@/components/atoms/logo';
import useStyles from './header.styles';
import UserActions from '@/components/molecules/userAction';
import Navigator from '../navigator';


const Header = () => {

    const classess = useStyles({size: '100%'});

    return (
        <div className={classess.wrapper}>
            <div className={classess.logoWrapper}>
                <Logo/>
            </div>
            <div className={classess.brandName}>
                <span>App v1</span> <br />
            </div>

            {/* <Navigator className={classess.navigator} /> */}

            <div className='ml-auto'>
                <UserActions />
            </div>

        </div>
    )
}
export default Header;