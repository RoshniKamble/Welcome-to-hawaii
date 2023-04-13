import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { Button } from '../button/Button'



function Navbar() {

    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true) 

    const handleClickIcon = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    
    useEffect(() => {
        showButton()
    }, [])

    
    window.addEventListener('resize', showButton)



    return (
        <div className='meu-navbar'>

            <div className="meu-navbar-container">
                <a href='#' className="meu-navbar-logo" onClick={closeMobileMenu}>
                    Aloha
                </a>

                <div className="menu-icon" onClick={handleClickIcon}>
                    {click ? <GrClose color='#192945' /> : <GiHamburgerMenu color='192945' />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/' className='nav-links' onClick={closeMobileMenu}> 
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/sobre' className='nav-links' onClick={closeMobileMenu}>
                            Surfing
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/cursos' className='nav-links' onClick={closeMobileMenu}>
                            Hula
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/cursos' className='nav-links' onClick={closeMobileMenu}>
                            Volcano
                        </a>
                    </li>
                </ul>

                {button && <Button buttonSize={'meu-btn--small'}>Book a trip</Button>}
            </div>
        </div>
    )
}

export default Navbar