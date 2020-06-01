import React, {Fragment, useState, useEffect} from 'react'
import Form from '../Components/Form'
import Date from '../Components/Date'
import './App.css'

function App() {
  // Citas en el local storage.
  let initialDates = JSON.parse(localStorage.getItem('dates'))
  if(!initialDates) {
    initialDates = [];
  }

// Generando en el componente principal el state principal que va generar todas las citas.
  const [dates, saveDates] = useState(initialDates)

  // useEffect para realizar ciertas operaciones cuando el state cambie.
  useEffect( () => {
    let initialDates = JSON.parse(localStorage.getItem('dates'))
    if(initialDates) {
      localStorage.setItem('dates', JSON.stringify(dates))
    } else {
      localStorage.setItem('dates', JSON.stringify([]))
    }
  }, [dates])

  // Función que toma las citas actuales y agrega una nueva.
  const crateDate = date => {
    // Creamos una copia del state dates para guardar una cita ya creada y en el segundo parametro pasamos la nueva cita creada
    saveDates([...dates, date]);
  }

  // Función eliminar citas por su id.
  const deletDate = id => {
    const newDates = dates.filter( date => date.id !== id )
    saveDates(newDates)
  }

  // Menaje condicional de citas.
  const titulo = dates.length === 0 ? 'Agregue una cita' : 'Administre sus citas';  

  return (
    <Fragment>
      <div className='App'>
        <h2>Date Manager</h2>
        <div className='container'>
          <div className='row'>
            <div className='one-half column'>
              <Form 
                crateDate={crateDate}
              />
            </div>
            <div className='one-half column'>
              <h2>{titulo}</h2>
              {dates.map(date => 
                <Date 
                  date={date} 
                  key={date.id} 
                  deletDate={deletDate}
                />) 
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
