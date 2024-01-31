import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setcity] = useState('london');
  const [deg, setdeg] = useState(0);
  const [desc, setdesc] = useState('Raining');
  const [cityvalue, setcityvalue] = useState();

  function handleInput(event) {
    // console.log(event.target.value)
    setcityvalue(event.target.value)
  }


  function getdata() {
    let weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=ee949cc184264765ad2f53c854eb1a81`)
    // console.log(weather);

    weather.then((dalta) => {
      console.log('Fetched data SuccessFull')
      console.log(dalta.data);
      setcity(dalta.data.name);
      setdeg(dalta.data.main.temp);
      setdesc(dalta.data.weather[0].description);
      console.log((dalta.data.name));
      console.log(dalta.data.main.temp);
      console.log((dalta.data.weather[0].description));
    }).catch(()=>{
      console.log('Failed');
    })


  }

  return (<div className="flex flex-row justify-center h-[100vh] items-center">
    <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="px-5 py-2 rounded-md shadow text-center">
      <h2 className="font-medium">Hey! ⛅</h2>
      <p className="text-xs md-1">Do you want to know the weather Report :)</p>
      <input type="text" placeholder="Search" onChange={handleInput}
        className="rounded-md h-6 text-sm mt-2 mb-1 px-5 py-2 outline-none"></input>
      <br />
      <button onClick={getdata} className="bg-black text-white rounded-md px-5 py-2 text-xs mt-2">Get Report ⚡</button>
      <p className="text-xs mt-2">Degree: {deg} | City: {city} | Weather: {desc}</p>
    </div>
  </div>);
}

export default App;
