import useStyles from './navigator.styles';
import { menuItems } from './navigator.constants';
import NavItem from '@/components/atoms/navItem';

interface INavigatorProps {
    className: string
}

const Navigator = ({ className }: INavigatorProps) => {

    const clssess = useStyles();

    return (
        <ul className={`flex flex-row ${className} ${clssess.wrapper}`}>
            {menuItems.map((menuItem, index) => {
                return (
                    <NavItem key={index} {...menuItem} />
                )
            })}
        </ul>
    )
}

export default Navigator;