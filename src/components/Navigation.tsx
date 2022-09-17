import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navigation.module.css'

function Navigation() {
    return (
       <nav className={s.nav}>
           <h3 className={s.text}>Github Search</h3>
           <span >
               <Link className={s.linkHome} to='/'>Home</Link>
               <Link className={s.linkFav} to='/favourites'>Favourites</Link>
           </span>
       </nav>


    );
}

export {Navigation};