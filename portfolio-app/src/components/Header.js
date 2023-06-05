import React from "react";
import './styles/Header.scss';

const Header = ( ) => { 
    return (
        <div className="header">
            <div className="header__logo">
                <h1>Seif S. React Project June 2023</h1>
            </div>

            <nav>
                <ul>
                    <div className = "closed">
                        <Close className='close'/>
                    </div>
                </ul>
            </nav>

            </div>
    )
}

export default Header