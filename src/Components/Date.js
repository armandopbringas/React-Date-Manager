import React from 'react'
import PropTypes from 'prop-types'

const Dates = ({date, deletDate}) => {
    return (
        <div className='cita'>
            <p>Citado: <span> {date.citado} </span></p>
            <p>Tutor: <span> {date.tutor} </span></p>
            <p>Fecha <span> {date.fecha} </span></p>
            <p>Hora: <span> {date.hora} </span></p>
            <p>Asunto: <span> {date.asunto} </span></p>

            <button
                className='u-full-width'
                onClick={ () => deletDate(date.id) }
            >
                Eliminar &times;
            </button>

        </div>
    );
}

Dates.propTypes = {
    date: PropTypes.object.isRequired,
    deletDate: PropTypes.func.isRequired
}
 
export default Dates;
