import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterDetails from './components/CharacterDetails';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
      .then(response => {
        setCharacters(response.data);
      })
      .catch(e => console.log("error getting characters from API", e))
  }, [])

  const renderListOfCharacters = () => {
    return (
      <div>
        <h2>List of characters in our API:</h2>

        {characters.map((element) => {
          return (
            <div key={element.id} className="box">
              <h3>{element.name}</h3>
              <p>Occupation {element.occupation}</p>
              <NavLink to={`/characters/${element.id}`}>More Details</NavLink>
            </div>
          )
        })}

      </div>
    );
  }

  return (
    <div className="App">
      <h1>React Charates App</h1>

      <Routes>
        <Route path='/' element={renderListOfCharacters()} />

        {/* 
        <Route path="/characters/1" element={<CharacterDetails id="1" />} />
        <Route path="/characters/2" element={<CharacterDetails id="2" />} />
        <Route path="/characters/3" element={<CharacterDetails id="3" />} /> 
        <Route path="/characters/4" element={<CharacterDetails id="4" />} /> 
        */}
        
        <Route path="/characters/:characterId/" element={<CharacterDetails charactersArr={characters} />} />
      </Routes>

    </div>
  );
}

export default App;
