import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/fontes/GandhiSans-Bold.otf'
import './assets/fontes/GandhiSans-Regular.otf'
import './styles/estilosGlobais.scss';
import Inicio from './pages/Inicio';
import AppRoutes from './routes.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AppRoutes/>
  </React.StrictMode>
);

