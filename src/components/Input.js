import React from 'react';
import './Input.css';

function Input({
    name, 
    setName, 
    animal, 
    setAnimal,
    getCreatureHook,
    setGetCreatureHook,
    legs,
    setLegs
}) {

    const creatures = {name, animal, legs };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creatures)
    };

    const getCreature = () => {
        setGetCreatureHook(!getCreatureHook);
        
    }

   
    const handleChangeNameInput = (e) => {
            // console.log(e);
            // console.log(e.target.name);
            // console.log(e.target.value);
            setName(e.target.value);
           
    }
    const  handleSubmit = (e) => {
        e.preventDefault();

    fetch('https://lowly-foam-badger.glitch.me/creatures', requestOptions)
    .then(response => {
        //console.log(response);
        return response.json();
    })
    .then(data => {
        //console.log(data);
        getCreature();
    })
       
    }

   
    const handleChangeAnimalInput = (e) => {
        //console.log(e.target.value)
       setAnimal(e.target.value);
    }

    const handleSelection = (e) => {
        let mySelection = e.target.value;
       // console.log(mySelection);
        setLegs(mySelection);
    }
 
    
    
   
    return (
        <div className="input">
            <form className="input_form" onSubmit={handleSubmit}>
            <input type="text" id="name" value={name} name={name} placeholder="name" onChange={handleChangeNameInput} />
            <input type="text" id="animal" value={animal}placeholder="animal" onChange={handleChangeAnimalInput}/>

            <select name="legs" id="legs" value={legs} onChange={handleSelection}>
                <option value="0">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>

            </select>
            <button className="btn" type="submit">Send</button>
            </form>
           {name === ""|| animal ==="" || legs < 1 ? <h1>...</h1> :  <h1 className="hiddenDisplay">{`${name} the ${animal} who has ${legs} legs`}</h1>}
   
        </div>
    )
}

export default Input;
