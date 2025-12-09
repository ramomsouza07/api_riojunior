import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Pesquisa from './pages/Pesquisa'
import Ej_Pag from './pages/EJ_Pag'
import Erro from './pages/Erro'
import IndicadoresFormPage from './pages/IndicadoresForm'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
                <Route path="/registro" element={ <Register /> } />
                <Route path='/empresas' element={ <Pesquisa /> } />
                <Route path='/empresas/:id' element={ <Ej_Pag/> }/>
                <Route path="*" element={ <Erro/> } />
                <Route path="/indicadores/cadastro" element={<IndicadoresFormPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp