import React from 'react';
import './public/css/app.css';

const Picture = ({_param1, _param2}) => {
  return (
    <div>
        <img src={_param1} alt="First" />
        <img src={_param2} alt="Second" />
    </div>
  )
}

export default Picture