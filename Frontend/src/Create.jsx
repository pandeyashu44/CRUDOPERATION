import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
  const [values, setvalues] = useState({
    principal_entity_id : ' ',
    sender_id : ' ',
    template_id : ' ',
    template_content : ' ',
    created_at : ' ',
    updated_at : ' '
  })
  const nevigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/dlt', values)
      .then(res => {
        console.log(res);
        nevigate('/');
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor="">principal_entity_id</label>
            <input type="text" placeholder='Enter principal_entity_id...' className='form-control' 
            onChange={e => setvalues({...values,principal_entity_id: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">sender_id</label>
            <input type="text" placeholder='Enter sender_id...' className='form-control'
            onChange={e => setvalues({...values,sender_id: e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">template_id</label>
            <input type="text" placeholder='Enter template_id...' className='form-control' 
            onChange={e => setvalues({...values,template_id: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">template_content</label>
            <input type="text" placeholder='Enter template_content...' className='form-control' 
            onChange={e => setvalues({...values,template_content: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">created_at</label>
            <input type="datetime-local" className='form-control' 
            onChange={e => setvalues({...values,created_at: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">updated_at</label>
            <input type="datetime-local" className='form-control' 
            onChange={e => setvalues({...values,updated_at: e.target.value})}/>
          </div>
          <button className='btn btn-success'> Submit </button>
        </form>
      </div>
     
    </div>
  )
}

export default Create
