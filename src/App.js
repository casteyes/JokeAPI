import axios from 'axios';
import react, {useState} from 'react';

function App() {

const [joke,setJoke] = useState("");

  
  const getJoke = async() => {
const response = await axios.get("https://official-joke-api.appspot.com/random_joke")


console.log(response)
setJoke(response.data.setup + "..." + response.data.punchline)

  } 
  

  
  return (
    <div className="App">
    <h1> Joke Time</h1>
    <button onClick={getJoke}>Get that Joke!</button>
    {joke}
    </div>
  );
}

export default App;
