import { useState } from 'react';

export const State = ({props, Soma, children }) => {
  const [value, setValue] = useState({});
    
 return (
 <>
  {children}
   <h1>Usando useState com varios dados</h1>
    <p>algo que: </p>
 </>
 );
};

export function Soma(a: number) {
 [test, setTest] = useState()
  setTest(a)
  
 return (
    <p>asas</p>
 )
}