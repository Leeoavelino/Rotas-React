import './App.css'

//ROUTER-DOM
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

//COMPONENTS
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {


  return (
    <div className="App">

      <h1>
        React Router
      </h1>

      <BrowserRouter>
        {/* tem que colocar dentro do browserRouter */}
        <Navbar />

        <SearchForm />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<NotFound />} />
          {/* redireciona quem usar o caminho company ir para a pagina about */}
          <Route path='/company' element={<Navigate to='/about' />} />
        </Routes>
      
      
      </BrowserRouter>





    </div>
  )
}

export default App
