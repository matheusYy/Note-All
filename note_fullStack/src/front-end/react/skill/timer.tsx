import { useState, useEffect, useRef } from 'react';
export const Timer = ({ props }): TSX.element => {
 const [value, setValue] = useState({});

useEffect(() => {
 setTimeout(() => {
  setValue({data: new Date().toLocaleTimeString()})
 }, 1000);

}, [value]);


 return (    
    <div> 
     <h1> Usando hook personalizado:</h1>
       <p>Agora são: {value.data}</p>
    </div>
)};

