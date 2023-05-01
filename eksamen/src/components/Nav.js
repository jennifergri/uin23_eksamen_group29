import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav(){
    return (
        //Henter navigasjonen fra kompontentet som blir sendt videre til app.js (klikkbare)
        <nav>
                <li>
                <Link to="/gameshop">Shop</Link>
                </li>
                <li>
                <Link to="/myfavourites">My Favourites</Link>
                </li>
                <li>
                <Link to="/mygames">My Games</Link>
                </li>
                
        </nav>
        //https://blog.logrocket.com/creating-navbar-react/
    )
}

