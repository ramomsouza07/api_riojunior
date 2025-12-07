import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Pesquisa from './pages/Pesquisa'
import User from './pages/User'
import Ej_Pag from './pages/EJ_Pag'
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
                <Route path='/teste' element={ <Ej_Pag/> }/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp

// <Route path="*" element={ <Erro/> } />