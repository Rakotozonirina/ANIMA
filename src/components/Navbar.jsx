import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../public/logo_qg.png';
import ImageHero from '../public/image_hero.png';
import OtherImage from '../public/other_hero.png';
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { RiTwitterLine } from "react-icons/ri";


const Navbar = () => {
return (
    <header className="container mx-auto px-[60px] h-[200vh] lg:h-[120vh] relative bg-white">
        <nav className='py-8 flex flex-wrap justify-center gap-4 items-center lg:gap-0 lg:flex-nowrap lg:py-4 lg:flex lg:items-center lg:justify-between'>
            <img src={Logo} alt='Logo' width={120} height={120} />
            <h2 className='text-orange-500 cursor-default text-xl font-black underline uppercase leading-[29px]'>acceuil</h2>
            <Link to="/contact" className='p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>
                Contactez-nous
            </Link>
        </nav>
        <section className='lg:absolute scale-[0.5] lg:scale-[auto] absolute top-[-40%] left-[-60%] lg:top-[-30%] lg:left-[-10%]'>
            <img src={OtherImage} alt="circles"/>
        </section>
        <section className='h-[140vh] lg:h-[78vh] mt-8 lg:mt-8 lg:flex'>
            <article className='lg:w-[580px] lg:flex lg:flex-col lg:gap-2 lg:justify-center grow'>
                <h1 className='text-gray-900 text-[42px] lg:text-[54px] font-bold leading-[60px]'>Nous fournissons la meilleure nourriture pour vous</h1>
                <p className='text-gray-500 text-base font-medium leading-[29px] md:w-[376px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet mollitia perferendis odit cum iusto ullam consectetur.</p>
                <div className='w-max my-3'>
                    <Link to="/about">
                        <button className='capitalize w-[120px] p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-[#101A24] text-white text-base font-bold leading-[29px]'>à propos</button>
                    </Link>
                    <Link to="/shop">
                        <button className='capitalize w-[167px] p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px] mx-8'>shop</button>
                    </Link>
                </div>
                <div className='my-3 flex items-center gap-4'>
                    <div className='flex gap-4'>
                        <span className='w-[45px] h-[45px] flex items-center justify-center rounded-full border border-gray-900'>
                            <FaFacebookF/>
                        </span>
                        <span className='w-[45px] h-[45px] flex items-center justify-center rounded-full border border-gray-900'>
                            <FaInstagram/>
                        </span>
                        <span className='w-[45px] h-[45px] flex items-center justify-center rounded-full border border-gray-900'>
                            <RiTwitterLine/>
                        </span>
                    </div>
                    <span className='w-[143px] h-[0px] opacity-20 border border-black'></span>
                </div>
            </article>
            <section className='lg:w-[580px] relative grow'>
                <img src={ImageHero} alt="hero page" className='lg:absolute md:top-[-15%] lg:left-[-15%]' />
            </section>
        </section>
    </header>
)
}

export default Navbar
