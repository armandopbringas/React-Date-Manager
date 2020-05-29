import React from 'react'

const Dates = ({date}) => {
    return (
        <div className='cita'>
            <p>Citado: <span> {date.citado} </span></p>
            <p>Tutor: <span> {date.tutor} </span></p>
            <p>Fecha <span> {date.fecha} </span></p>
            <p>Hora: <span> {date.hora} </span></p>
            <p>Asunto: <span> {date.asunto} </span></p>
        </div>
    );
}
 
export default Dates;
