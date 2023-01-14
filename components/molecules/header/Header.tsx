import Logo from '@/components/atoms/logo';
import useStyles from './header.styles';
import UserActions from '@/components/molecules/userAction';
import Navigator from '../navigator';
import { useRouter } from 'next/router';
import { ROUTES } from '@/shared/constants';


const Header = () => {

    const classess = useStyles({ size: '100%' });

    const router = useRouter()

    const navigateToHome = () => { router.push(ROUTES.HOME) }

    return (
        <div className={classess.wrapper}>
            <div onClick={navigateToHome} className="flex items-center">
                <div className={classess.logoWrapper} >
                    <Logo />
                </div>
                <div className={classess.brandName}>
                    <span>App v1</span> <br />
                </div>
            </div>

            <Navigator className={classess.navigator} />

            <div className='ml-auto'>
                <UserActions />
            </div>

        </div>
    )
}
export default Header;