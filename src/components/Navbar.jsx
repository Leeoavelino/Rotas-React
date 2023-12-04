import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>Sobre</Link> */}

            {/* <NavLink to='/' className={({isActive}) => (isActive? 'esta-ativo' : 'nao-ativo') }>Home</NavLink>
            <NavLink to='/about'>Sobre</NavLink> */}

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>Sobre</NavLink>

        </nav>
    )
}