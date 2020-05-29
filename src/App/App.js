import React, {Fragment, useState} from 'react'
import Form from '../Components/Form'
import Date from '../Components/Date'
import './App.css'

function App() {

// Generando en el componente principal el state principal que va generar todas las citas.
  const [dates, saveDates] = useState([])

  // Función que toma las citas actuales y agrega una nueva.
  const crateDate = date => {
    // Creamos una copia del state dates para guardar una cita ya creada y en el segundo parametro pasamos la nueva cita creada
    saveDates([...dates, date]);
  }

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
              <h2>Administra tu cita</h2>
              {dates.map(date => <Date date={date} key={date.id} />) }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
