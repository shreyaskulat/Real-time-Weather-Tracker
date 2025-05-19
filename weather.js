import  {useState} from 'react'
import './weather/weather.css'
const api = {
  key:"2a35c85bdb8169efe31237ccb7b54817",
  base:"https://api.openweathermap.org/data/2.5/"
}

const App = () => {
  const[weather, setWeather]=useState({})
  const[city, setCity]=useState('')
  function search(){
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(data=>setWeather(data))
    }
  return (
    <div className='sec'>
      <section className='sec2'>
        <input type={'text'} placeholder='Enter your city name' onChange={(e)=>setCity(e.target.value)}></input>
        <br></br>
        <button onClick={search}>search</button>
        <img src='https://i.gifer.com/3F3I.gif' height={'50px'} width={'100%'}></img>
      {(typeof weather.main!=="undefined")?(<div className='cards'>
        <marquee behaviour='alternate' direction='left'><p>Cityname:<b>{weather.name}</b></p></marquee>
        <p>Temp:<b>{weather.main.temp}</b></p>
        <p>Clouds/Rain<b>:{weather.weather[0].main}</b></p>
        <p>Description:<b>{weather.weather[0].description}</b></p>
        <p>Country:<b>{weather.sys.country}</b></p>
      </div>):("Not Found")}
      </section>
      
    </div>
  )
}

export default App
