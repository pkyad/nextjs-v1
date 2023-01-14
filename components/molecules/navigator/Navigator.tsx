import Link from 'next/link'
import { useRouter } from 'next/router';
import useStyles from './navigator.styles';
import {menuItems} from './navigator.constants';
import NavItem from '@/components/atoms/navItem';
import useSession from '@/shared/hooks/useSession';

interface INavigatorProps{
    className: string
}

const Navigator = ({className} : INavigatorProps) => {

    const clssess = useStyles();
    const {isVendor} = useSession();

    return (
        <ul className={`flex flex-row ${className} ${clssess.wrapper}`}>
           {menuItems.map((menuItem , index) => {
            if (menuItem.hideForVendors && isVendor) {
                return
            }
            return (
                <NavItem key={index} {...menuItem} />
            )
           })}
        </ul>
    )
}

export default Navigator;