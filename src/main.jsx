import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Films from './films.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' exact={true} element={<Films/>}/>
  </Routes>
  
  </BrowserRouter>
   
  </React.StrictMode>,
)
