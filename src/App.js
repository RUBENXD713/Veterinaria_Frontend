import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom';


import Login from './assets/components/Login';
import Registro from './assets/components/Registro';
import Main from './assets/components/Main';
import NotFound from './assets/components/NotFound';
import Foother from './assets/components/Foother';
import Navbar from './assets/components/Navbar';
import Cliente from './assets/components/Cliente';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Registro />}/>
            <Route path="/main" element={<Main />}/>
            <Route path="/foother" element={<Foother />}/>
            <Route path="/nav" element={<Navbar />}/>
            <Route path="/test" exact render ={props=> (<Main {...props} />)}/>
            <Route path="/*" element={<NotFound />} />
            <Route path="/cliente" element={<Cliente/>}/>
          </Routes>  
        </BrowserRouter>
        
        
    </React.Fragment>
  );
}

export default App;
