import {HomePage} from "./pages/HomePage/HomePage";
import {Header} from "./common/components/Header/Header.jsx";
import {CharacterPage} from "./pages/CharacterPage/Character.jsx";
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx";
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx";

function App() {
 return (
     <div>
      <Header/>
      <HomePage/>
      <CharacterPage/>
      <LocationPage/>
      <EpisodePage/>
     </div>
 )

}

export default App
