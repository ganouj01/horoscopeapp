import './App.css';
import SelectedSign from './components/SelectedSign';
import SelectedDate from './components/SelectedDate';
import InputForm from './components/InputForm';
import { useEffect, useState } from "react"
import { getHoroscope } from "./lib/api"


function App() {
  const [selectedSign, setSelectedSign] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [horoscope, setHoroscope] = useState([])

  const [inputDetails, setInputDetails] = useState({})

  const inputDataHandler = (inputData) => {
    setInputDetails(inputData)
  }

  useEffect(() => {
    getHoroscope(selectedSign, selectedDate).then(setHoroscope)
}, [selectedDate, selectedSign])


  return (
    <div className='App'>

      <h1>The Horoscope App</h1>

      {<InputForm inputData={inputDataHandler} />}

      <SelectedSign onSignSelected={setSelectedSign} />
      
      
      {!selectedDate && <h2 className='selectedsign'> Selected Sign: <span>{selectedSign}</span></h2>}
      

      <SelectedDate onDateSelected={setSelectedDate} />
      <div className='rendereddata'>

      {(selectedDate && inputDetails.name && inputDetails.email) && 
      <section><p>Name: {inputDetails.name}</p> <p>email: {inputDetails.email}</p> <p>Date: {horoscope.date}</p></section>}

     {(inputDetails.name && inputDetails.email && selectedDate &&selectedSign) && 
     <section><p>Sign: {horoscope.sunsign}</p>
     <p>Horoscope: {horoscope.horoscope}</p></section>}

     {!(inputDetails.name && inputDetails.email && selectedDate &&selectedSign) && 
     <p className='disclaimer'>Enter All Data to Get Your Horoscope!</p>}
     </div>
</div>
  );
}

export default App;


