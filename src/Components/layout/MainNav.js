import React, { useContext, useReducer} from 'react';
import { Outlet, Link } from 'react-router-dom'
import './MainNav.css'
import Context from '../../context/state/Context';


 export default function MainNav(props) {
    const{itemsId} = useContext(Context)
    return (
        <header className='header'>
            <div className='logo'>MAGAZIN MACHETE</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> Produse</Link>
                    </li>
                    <li>
                        <div className='btn_nav'><Link to='/Cos'>Cos cumparaturi{itemsId.length > 0 &&<span>{itemsId.length}</span>}</Link></div>
                    </li>
                    <li>
                        <Link to='/Oferte'>Oferte</Link>
                    </li>    
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

