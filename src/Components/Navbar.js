import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sass/Navbar.scss'

const Navbar = ({ Tabs, theme, setTheme }) => {


    //reng modunun deismesinin functionu
    const themeMode = () => {
        setTheme(!theme)
    }
    return (
        <nav className="navbar navbar-expand-lg headerr">
            <div className="container-fluid header-children">
                <a className="navbar-brand" href="#">Fogito</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse link-div" id="navbarNav">
                    <ul className="navbar-nav">

                        {
                            Tabs.map((item, key) => {
                                return (
                                    <li className='nav-item'>
                                        <Link to={item.path} className="nav-link atag">
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>

                <div>
                    {/* theme modun icon tiklama hissesi */}
                    <button className="theme-mode"
                        onClick={() => {
                            themeMode()
                        }
                        }><i class="bi bi-palette" /></button>
                </div>

               
            </div>
        </nav>

    )
}

export default Navbar