import {Title} from "../../common/components/styles/Title.styles.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export const LocationPage = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location`)
            .then((res) => setLocations(res.data.results));
    }, []);

    return (
        <div>
            <Title fontSize="70px">LocationPage</Title>
            {locations.length && (
                locations.map((location) => (
                    <div key={location.id}>
                        <ul>
                            <li>Название локации: <b>{location.name}</b></li>
                            <li>Тип локации: <b>{location.type}</b></li>
                            <li>Измерение: <b>{location.dimension}</b></li>
                            <li>Персонажей: <b>{location.residents.length}</b></li>
                        </ul>
                        <hr style={{ margin: "20px 0", opacity: 0.5 }} />
                    </div>
                ))
            )}
        </div>
    );
};