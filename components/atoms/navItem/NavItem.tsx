import Link from "next/link";
import { useRouter } from "next/router";
import useStyles from "./navItem.styles";
import {INavItemProps} from '@/shared/types';

const NavItem = ({link , label, strict} : INavItemProps) => {

    const {route} = useRouter();
    const classess = useStyles()

    let active;
    if(strict){
        active = route === link;
    }else{
        active = route.indexOf(link) > -1;
    }

    return (
        <>
            <li className={ active ? 'active' : '' }>
                <Link href={link}>
                    <span className={classess.link}>{label}</span>
                </Link>
            </li>
        </>
    )
}

export default NavItem