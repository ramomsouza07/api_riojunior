import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Pesquisa from './pages/Pesquisa'
import Ej_Pag from './pages/EJ_Pag'
// import Erro from './pages/Erro'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/registro" element={ <Register /> } />
                <Route path='/empresas' element={ <Pesquisa /> } />
                <Route path='/teste' element={ <Ej_Pag/> }/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp

// <Route path="*" element={ <Erro/> } />