import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './page/Home'
import Gallery from './page/Gallery';
import Contact from './page/Contact';
function App() {

  return <>
    {/* header */}
    <section>
      <header className='header'>
        <Link className='logo_name' to='/' >СтройТрест</Link>
        <nav className='nav_menu'>
          <li>
            <Link className="a" to='/Contact' >Контакты</Link>
          </li>
          <li>История компании</li>
            <Link className='a' to='Gallery'>Галерея</Link>
          <li>Преимущества</li>
        </nav>
      </header>
    </section>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  </>
}
export default App;
