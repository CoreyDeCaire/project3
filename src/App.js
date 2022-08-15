import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import DogImage from './DogImage';
import Dropdown from './Dropdown';


function App() {

  const [dogUrl, setDogUrl]= useState(''); 
  const [breed, setBreed]= useState('golden');
  const [breedName, setBreedName]= useState('');


  useEffect(() => {
    const url = new URL (`https://dog.ceo/api/breed/${breed}/images/random`);
    url.search = new URLSearchParams ({
        imgonly: true,
    });
    
    fetch(url)
        .then(results => {
            return results.json();
        }).then(data => {
            setDogUrl(data.message)
        })

  },[breed]);

  const getBreed = (e, userChoice, breedName) => {
    e.preventDefault()
    setBreed(userChoice)
    setBreedName(breedName)
  }


  return (
    <div className="App">
      <header>
          <h1>What Is Your Favourite Dog Breed?</h1>
          <h2>Choose an option below to &#128525;</h2>
      </header>
      <Dropdown getBreed={getBreed} />
      <DogImage dogUrl={dogUrl} breed={breedName} />
    </div>
    
  );
}


export default App;
