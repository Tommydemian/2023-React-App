import React, { useEffect, useState } from 'react';
import axios from 'axios';
// types
import { Todo } from '../types';

const Data: React.FC  = () => {

  const [apiResponse, setApiResponse] = useState([] as Todo[]); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true); 
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res.data);
        setApiResponse(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(String(error));
        setLoading(false);
      });
  }, []);


  return (
    <>
      <h1>data displaying</h1>
      {loading && <><p>loading...</p></> }      
      {
        apiResponse.map(todo => ( 
          <div style={{backgroundColor: todo.completed ? '#C6FAD0' : '#d20f46', marginBlock:'.5em'}} key={todo.id}>
            <p style={{paddingBlock: '1em'}}>{todo.title}</p>
          </div>) 
        )
      }
    </>
  );
};

export default Data;