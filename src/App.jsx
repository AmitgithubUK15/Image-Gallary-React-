import React, { useState } from "react";
import './App.css'

function App() {
  const [val, setvalue] = useState("./img/nature.jpeg");
  let [count, setcount] = useState(1);
  let [leftcount,setleftcount] = useState(3);

  // Right Button
  async function getdata() {

    try {
      setcount(count + 1)
      const response = await fetch('/Json/Data.json');
      const data = await response.json();
      console.log(data.img.length)
      if(count === 3){
        setcount(0);
        setvalue(data.img[count]); 
      }
      else{
        
        setvalue(data.img[count]);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  // Left Button
  async function getleft() {
    try {
      setleftcount(leftcount - 1)
      const response = await fetch('/Json/Data.json');
      const data = await response.json();

      if(leftcount === 0){
         setleftcount(3)
         setvalue(data.img[leftcount]);
        }
        else{
          setvalue(data.img[leftcount]);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  console.log(count);
  return (
    <>
      <div className="main">
        <div>
          <button onClick={getleft} >Left</button>
        </div>
        <div>
          <img src={val} alt="" width="500px" height="250px" />
        </div>
        <div>
          <button onClick={getdata}>Right</button>
        </div>
      </div>
    </>
  );
}

export default App;
