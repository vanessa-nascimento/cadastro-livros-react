import React from 'react';

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <div className="container">
                <a href="/" className="brand-logo">Biblioteca</a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="/autores">Autores</a>
                        </li>
                        <li>
                            <a href="/livros">Livros</a>
                        </li>
                        <li>
                            <a href="/sobre">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;