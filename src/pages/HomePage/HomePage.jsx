import {NavLink} from "react-router";
import {Title} from "../../common/components/styles/Title.styles.jsx";
import styles from "./HomePage.module.css"

export const HomePage = () => {
    return (
        <div className={styles.mainWrapper}>
            <Title fontSize={"100px"}>The Rick and Morty</Title>
            <nav className={styles.linkWrapper}>
                <NavLink to={"/characters"} className={styles.linkButton}>Characters</NavLink>
                <NavLink to={"/locations"} className={styles.linkButton}>Locations</NavLink>
                <NavLink to={"/episodes"} className={styles.linkButton}>Episodes</NavLink>
            </nav>
        </div>
    );
};