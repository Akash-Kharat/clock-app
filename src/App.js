import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

const [date , setDate] = useState(new Date());
  
function updateTimer(){
  setDate(new Date());
}

useEffect(function () {
  const timerId = setInterval(updateTimer, 1000); 

  return function(){
    clearInterval(timerId,updateTimer);
  }
},[]);

  return (
    <>
    {/* <div className="App"> */}
      <h1 >
        {date.getHours()}:
          {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:
          {date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}    
      </h1>
      
     {/* </div> */}
    </>
    
  );
}

export default App;
