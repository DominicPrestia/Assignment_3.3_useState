import './App.css'
import { useState } from 'react';

function App() {

  let [count,setCount] = useState(0);

  function increment(){

    //the reason you do the function inside the setCount 
    //is because setCount is an asyncronus function. If the code was
    //written like this: setCount(count +1) then the value would only
    //increment by 1 each time even though there's two statements. 
    //It's because the old value of count is stored in both places
    //With the the added function c => c + 1 it takes the old value
    //adds 1 and then returns it so the next line will take that updated
    // value and increment off the updated value. 
    setCount(c => c + 1)
  }

  function decrement(){
    if(count > 0){

      setCount(c => c - 1)
    }
    
  }

  function reset(){
    setCount(0)
  }



  return (
    <>
      <h1>Counting App</h1>

      {console.log(count)}
      
      <button onClick={decrement}> - </button>
      <span> {count} </span>
      <button onClick={increment}> + </button>
      <button onClick={reset}> Reset </button>

    </>
  );

}

export default App;
