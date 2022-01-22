import React from 'react';
import axios from 'axios';

const Medium = () => {

    const link = 'Access-Control-Allow-Origin: https://medium.com/feed/@diogo_mendes' ;


  return (
      <div>
        <h1>Medium</h1>
        <button onClick={() => console.log('hello')}>click</button>
      </div>
  )
};

export default Medium;
