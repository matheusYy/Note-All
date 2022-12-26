import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//componentes
import { Timer } from './front-end/react/skill/timer';
import { State } from './front-end/react/hooks/useState/useState';
import { Ref } from './front-end/react/hooks/ref/ref';
import {  } from './front-end/react/hook_personalizado/hook_personalizado';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Timer />
   <State />
  </React.StrictMode>,
);
