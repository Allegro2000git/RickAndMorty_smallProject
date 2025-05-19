import {Link, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './Character.module.css'

export const Character = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
            setCharacter(res.data)
        })
    }, [id])

    const statusStyles = {
        Alive: styles.aliveStatus,
        Dead: styles.deadStatus,
        unknown: styles.unknownStatus
    };

    const statusObject = statusStyles[character?.status] || styles.unknownStatus;

    return (
        <div className={"pageContainer"}>
            {character !== null && (
                <div className={styles.container}>
                    <h1 className="pageTitle">{character.name}</h1>
                    <div className={styles.content}>
                        <img className={styles.img} src={character.image} alt={"character"}/>
                        <div className={styles.description}>
                            <div className={styles.statusContainer}>
                                <div className={`${styles.status} ${statusObject}`}></div>
                                <div>
                                    {character.status} - {character.species}
                                </div>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.subTitle}>Last known location:</p>
                                <p className={styles.subTitleResult}>{character.location.name}</p>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.subTitle}>Episode count:</p>
                                <p className={styles.subTitleResult}>{character.episode.length}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={"/characters"} className={"linkButton"}>Go back</Link>
                </div>
            )}
        </div>
    )
}