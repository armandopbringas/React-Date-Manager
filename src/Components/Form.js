import React, {Fragment} from 'react';

const Form = () => {
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            <form>
                <label>Nombre</label>
                <input
                    type='text'
                    name='citado'
                    placeholder='Nombre'
                    className='u-full-width'
                />
                <label>Tutor</label>
                <input
                    type='text'
                    name='Tutor'
                    placeholder='Nombre del Tutor'
                    className='u-full-width'
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                />
                <label>Asunto</label>
                <textarea
                    name='Asunto'
                    className='u-full-width'
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
 
export default Form;