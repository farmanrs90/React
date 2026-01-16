import React from 'react'
import '../css/header.css'
import Home from '../../components/Home'
import About from '../../components/about'
import Service from '../../components/Service'
import Contact from '../../components/Contact'

const Header = () => {
    return (
        <header>
            <h3>PTP 101</h3>
            <nav>
                <Home />
                <About />
                <Service />
                <Contact />

            </nav>

        </header>
    )
}

export default Header
