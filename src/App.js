import { useState } from 'react'
import axios from 'axios'

function App() {

  const [data , setData] = useState({});  
  const [location , setLocation] = useState('');  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=df32c3dad2eed17eedc5739646f29bd2`

  const searchLocation=(event)=>{
    if(event.key === "Enter"){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }


  let temperature; 
  if (data.main && data.main.temp) {
  temperature = Math.floor(data.main.temp) - 273;
  }

   return (
    <div className="app">
      <div className="search">
        <input type="search"
         value = {location}
         onChange={event=>setLocation(event.target.value)}
         placeholder='Enter location here'
         onKeyDown = {searchLocation}
         />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
              <h1>{temperature}°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        {/* bottom */}
        <div className="bottom">
          <div className="feels">
           <p className='bold'> 40°C </p>
           <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>20Kmph</p>
            <p>Wind speed</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
