import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Login from './pages/Login'
import Registro from './pages/Registro'
// import Erro from './pages/Erro'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/registrar" element={ <Registro /> } />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp


/*
    <Route path="/login" element={ <Login/> } />

    <Route path="*" element={ <Erro/> } />
*/