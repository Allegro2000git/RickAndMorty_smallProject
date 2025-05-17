import logo from '../../../assets/img/logo.png'
import {NavLink} from "react-router";
import styles from "./Header.module.css"


export const Header = () => {

    const styleLink = ({isActive}) => isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink
    
    return (
        <nav className={styles.container}>
            <NavLink to={"/"} className={styles.headerLink}>
                <img src={logo} alt={"logotype"} className={styles.logo}/>
            </NavLink>
            <NavLink to={"/"} className={styleLink}>Home</NavLink>
            <NavLink to={"/characters"}  className={styleLink}>Characters</NavLink>
            <NavLink to={"/locations"} className={styleLink}>Locations</NavLink>
            <NavLink to={"/episodes"} className={styleLink}>Episodes</NavLink>
        </nav>
    );
};
