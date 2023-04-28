import { useState } from "react";

function App() {

 const [likes, setLikes] = useState(0);
 const[value, setValue] = useState('Какой-то текст');

 const increment = () =>{
  setLikes(likes + 1);
 }

 const decrement = () =>{
  setLikes(likes - 1)
 }

  return (
    <div className="App">
      <header className="App-header">
       <div>
        <button onClick={increment}>Увеличить</button>
        <button onClick={decrement}>Уменьшить</button>
        <div>
          {likes }
        </div>

        <div>
          <h1>{value}</h1>
          <input 
            value={value}
            onChange={event => setValue(event.target.value)}

          >
          

          </input>
        </div>
       </div>
      </header>
    </div>
  );
}

export default App;
