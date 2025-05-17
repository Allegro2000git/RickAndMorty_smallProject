import {Title} from "../../common/components/styles/Title.styles.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export const EpisodePage = () => {

    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode').then(res => setEpisodes(res.data.results))
    }, []);

    return (
        <div>
            <Title fontSize={"70px"}>EpisodePage</Title>
            {episodes.length && (
                episodes.map(episode => {
                    return (
                        <div key={episode.id}>
                            <ul>
                                <li>Эпизод: <b>{episode.episode}</b></li>
                                <li>Название эпизода: <b>{episode.name}</b></li>
                                <li>Дата выхода эпизода в эфир: <b>{episode.air_date}</b></li>
                                <li>Список персонажей, которые были замечены в эпизоде: <b>{episode.characters.length}</b></li>
                            </ul>
                            <hr style={{ margin: "20px 0", opacity: 0.5 }} />
                        </div>
                    )
                })
            )}
        </div>
    );
};