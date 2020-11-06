import React, { useState, useEffect} from 'react';
import Input from './components/Input';
import './App.css';
import ReturnDisplayData from './components/ReturnDisplayData';

function App() {
  const [name, setName] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [animal, setAnimal] = useState("");
  const [getCreatureHook, setGetCreatureHook] = useState(false);
  const [legs, setLegs] = useState("");


  useEffect(() => {
    fetch("https://lowly-foam-badger.glitch.me/creatures")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      setFetchedData(data);
      
    })
    .catch(err => {
      console.error(err);
      console.log('Error!!!');
    })
  }, [getCreatureHook]);


  return (
    <div className="App">
      <h1>Creatures client</h1>
      <Input 
        name={name} 
        setName={setName} 
        animal={animal} 
        setAnimal={setAnimal}
        getCreatureHook={getCreatureHook}
        setGetCreatureHook={setGetCreatureHook}
        legs={legs}
        setLegs={setLegs}
      />
      <ReturnDisplayData fetchedData={fetchedData}/>
    </div>
  );
}

export default App;
