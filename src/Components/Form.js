import React, {Fragment, useState} from 'react'
import uuid from 'uuid/dist/v4'
import PropTypes from 'prop-types'

const Form = ({crateDate}) => {

    //Creando state de citas
    const [date, setDate] = useState({
        citado: '',
        tutor: '',
        fecha: '',
        hora: '', 
        asunto: ''
    })

    const [error, setError] = useState(false);

    // función que se ejecuta cuando el usuario escribe en un input.
    const setSate = e => {
        /* Utilizamos la función setDate, recordar que esta es la función que modifica el state, 
           es decir, con la función que se encuentra en el segundo valor extraido del hook useState */ 
        setDate({
            /* para asignar el mismo evento al resto de inputs creamos una copia del state (date)
               para cada uno de los inputs con spread opertor */
               ...date,
            //Usamos array detructuring:
            [e.target.name]: e.target.value
        })
    }

     // Extraer valores
     const { citado, tutor, fecha, hora, asunto } = date;

    //  Creando el evento que sucede cunando el usuario presiona agregar cita.
    const submitDate = e => {
        // Agregamos prevent default para evitar el evento por defecto. 
        e.preventDefault();
        // Validar (se usa trim() para eliminar o ignorar espacios en blanco hechos por el usuario)
        if(
            citado.trim() === '' || 
            tutor.trim() === '' || 
            fecha.trim() === '' || 
            hora.trim() === '' || 
            asunto.trim() === ''
          ) {
                setError(true);
                return;    
            }
        //  Eliminando el mensaje de error en caso de ser todo válido.
        setError(false)
        // Asignar ID
        date.id = uuid()

        // Crear cita
        crateDate(date)
        
        // Limpiar formulario al termianr de realizar (siempre con la función modificadora del state).
        setDate({
            citado: '',
            tutor: '',
            fecha: '',
            hora: '', 
            asunto: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            { error ? <p className='alerta-error'>Todos los campos son obligatorios *</p> : null }

            <form
                onSubmit={submitDate}
            >
                <label>Nombre</label>
                <input
                    type='text'
                    name='citado'
                    placeholder='Nombre'
                    className='u-full-width'
                    onChange={setSate}
                    value={citado}
                />
                <label>Tutor</label>
                <input
                    type='text'
                    name='tutor'
                    placeholder='Nombre del Tutor'
                    className='u-full-width'
                    onChange={setSate}
                    value={tutor}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={setSate}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={setSate}
                    value={hora}
                />
                <label>Asunto</label>
                <textarea
                    name='asunto'
                    className='u-full-width'
                    onChange={setSate}
                    value={asunto}
                ></textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >
                    Agendar cita
                </button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    crateDate: PropTypes.func.isRequired
}
 
export default Form;
