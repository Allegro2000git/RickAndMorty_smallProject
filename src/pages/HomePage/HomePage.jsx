import {NavLink} from "react-router";
import {Title} from "../../common/components/styles/Title.styles.jsx";
import styles from "./HomePage.module.css"

export const HomePage = () => {
    return (
        <div className={styles.mainWrapper}>
            <Title fontSize={"100px"}>The Rick and Morty</Title>
            <nav className={styles.linkWrapper}>
                <NavLink to={"/characters"} className={"linkButton"}>Characters</NavLink>
                <NavLink to={"/locations"} className={"linkButton"}>Locations</NavLink>
                <NavLink to={"/episodes"} className={"linkButton"}>Episodes</NavLink>
            </nav>
        </div>
    );
};