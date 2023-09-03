import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../public/logo_qg.png';
import HeroAbout from '../public/hero_about.png'

const NavbarAbout = () => {
return (
    <header>
        <nav className='container mx-auto px-[60px] py-4 flex items-center justify-between'>
            <Link to="/">
                <img src={Logo} alt='Logo' width={120} height={120} />
            </Link>
            <h2 className='text-orange-500 cursor-default text-xl font-black underline uppercase leading-[29px]'>à propos</h2>
            <Link to="/contact" className='p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>
                Contactez-nous
            </Link>
        </nav>
        <section>
            <img src={HeroAbout} alt="hero about" />
        </section>
    </header>
)
}

export default NavbarAbout
