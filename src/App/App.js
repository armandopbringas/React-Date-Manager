import React, {Fragment} from 'react'
import Form from '../Components/Form'
import './App.css'

function App() {
  return (
    <Fragment>
      <div className='App'>
        <h1>Date Manager</h1>
        <div className='container'>
          <div className='row'>
            <div className='one-half column'>
              <Form />
            </div>
            <div className='one-half column'>
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
