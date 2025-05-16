import {Title} from "../../common/components/styles/Title.styles.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './CharacterPage.module.css'


export const CharacterPage = () => {

    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        prev: null,
        next: null,
    })
    const [error, setError] = useState(null)


    const fetchData = (url) =>    {
        axios.get(url).then(res => {
            setCharacters(res.data.results)
            setInfo(res.data.info)
            setError(null)
        })
            .catch(err => {
                setError(err.response.data.error)
            })
    }

    useEffect(() => {
        fetchData('https://rickandmortyapi.com/api/character')
    }, []);

    const prevPageHandler = () => {
        fetchData(info.prev)
    }

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    const searchHandler = (event) => {
        const valueSearch = event.currentTarget.value
        fetchData(`https://rickandmortyapi.com/api/character?name=${valueSearch}`)
    }

    return (
        <div className={'pageContainer'}>
            <Title fontSize={"70px"}>CharacterPage</Title>
            <input type={"search"} className={styles.search} onChange={searchHandler} placeholder={"Search..."} />
            {error && <div className="errorMessage">{error}</div>}
            {!error && characters.length && (
                    <>
                        {<div className={styles.characters}>
                              {characters.map((character) => {
                                  return (
                                      <div className={styles.character} key={character.id}>
                                          <div className={styles.characterLink}>{character.name}</div>
                                          <img src={character.image} alt={`${character.name} avatar`} />
                                      </div>
                                    )
                                })}
                          </div>}
                        <div className={styles.buttonContainer}>
                            <button disabled={info.prev === null} className={"linkButton"} onClick={prevPageHandler}>Назад</button>
                            <button disabled={info.next === null} className={"linkButton"} onClick={nextPageHandler}>Вперед</button>
                        </div>
                    </>
            )}
        </div>
    );
};