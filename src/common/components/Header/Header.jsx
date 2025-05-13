import logo from '../../../assets/img/logo.png'
import {NavLink} from "react-router";
import styles from "./Header.module.css"


export const Header = () => {
    return (
        <nav className={styles.container}>
            <NavLink to={"/"} className={styles.headerLink}>
                <img src={`${logo}`} alt={"logotype"} className={styles.logo}/>
            </NavLink>
            <NavLink to={"/"} className={styles.headerLink}>Home</NavLink>
            <NavLink to={"/characters"} className={styles.headerLink}>Characters</NavLink>
            <NavLink to={"/locations"} className={styles.headerLink}>Locations</NavLink>
            <NavLink to={"/episodes"} className={styles.headerLink}>Episodes</NavLink>
        </nav>
    );
};