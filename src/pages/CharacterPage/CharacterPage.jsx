import {Title} from "../../common/components/styles/Title.styles.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './CharacterPage.module.css'


export const CharacterPage = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
       axios.get('https://rickandmortyapi.com/api/character').then(res => {
           setCharacters(res.data.results)

       })
    }, []);

    return (
        <div className={'pageContainer'}>
            <Title fontSize={"70px"}>CharacterPage</Title>
            {characters.length && (
                <div className={styles.characters}>
                    {characters.map((character) => {
                    return (
                    <div className={styles.character} key={character.id}>
                        <div className={styles.characterLink}>{character.name}</div>
                        <img src={character.image} alt={`${character.name} avatar`} />
                    </div>
                    )
                  })}
                </div>
            )}
        </div>
    );
};