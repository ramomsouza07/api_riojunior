import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Pesquisa from './pages/Pesquisa'
import User from './pages/User'
// import Erro from './pages/Erro'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/registro" element={ <Register /> } />
                <Route path='/pesquisa' element={ <Pesquisa /> } />
                <Route path='/usuario/:id' element={ <User /> } />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp

// <Route path="*" element={ <Erro/> } />