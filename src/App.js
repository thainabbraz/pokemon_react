import './App.css';
import React,{useState} from 'react';
function App() {
  //1.Create a hook
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  let baseUrl = "https://pokeapi.co/api/v2/pokemon/"

  //Handle submit
  const handleSubmit = e => {
    e.preventDefault();
    getPokemon();
  }

  //2.function to fetch and store inside my hook
  const getPokemon = () =>{
    //generates a random number
    let number = Math.floor(Math.random() * 10) + 1;
    console.log(number)
    
    setLoading(true);
    //concatenate baseUrl with number    
    //fetch url with the random generated number
    fetch(baseUrl+number).then(response => response.json()).then(
      data => {
        setTimeout(()=>{ 
          setLoading(false); 
          setPokemon(data)},3000)}
       )
        .catch(
        err => setError(err)); 
       
    }

  return (
    <div className="App">
     <h1 className="App-title" onClick={handleSubmit}>Pokemon API</h1> 
      {/* If I have a pokemon inside my hook, then display the image on the screen*/}
      {loading && <img src={"https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340"}/>}
      {(pokemon && loading===false) && <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}/>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
