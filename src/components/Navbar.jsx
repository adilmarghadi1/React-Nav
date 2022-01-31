import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import './Navbar.css'
import Contact from './Contact';
import About from './About';
import ErroPage from './ErroPage';
import { useState } from 'react';

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <div>
             <Router>
                 <nav className='navbar'>
                 <Link to='/' className='nav-logo'>Adil Dev <i className='fas fa-code'></i></Link>
                
                 <ul className={click ? "nav-menu active" : "nav-menu"}>

                    <li className='nav-item'>
                        <Link to='/' activeClassName="active" className='nav-link'  onClick={handleClick}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' activeClassName="active" className='nav-link'  onClick={handleClick}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' activeClassName="active" className='nav-link' onClick={handleClick}>Contact</Link> 
                    </li>
                 </ul>

                 <div className='nav-icon' activeClassName='active' onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                 </div>
                 </nav>


                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="*" element={<ErroPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navbar;