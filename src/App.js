import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import City from './City';


function App() {
  const [city,setCity]= useState();
  const key ="c5d8525bae256b2d2cb5e9edd9e39090";
  const [search, setSearch]= useState("");
  useEffect(()=> {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
          );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input onChange={(e)=> setSearch(e.target.value)} 
    type="text" 
    placeholder="Placeholder" 
    className="px-3 py-3 w-[250px] placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
{city && <City city={city} />}
      </div>
     
    </div>
  );
}

export default App;
