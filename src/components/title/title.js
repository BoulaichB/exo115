import React from 'react';
import './public/css/app.css';

const Title = ({_param1, _param2}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">{_param1}</h1>
        <p>{_param2}</p>
    </div>
    
  )
}

export default Title