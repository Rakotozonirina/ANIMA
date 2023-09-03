import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../public/logo_qg.png';
import ImageHero from '../public/image_hero.png';
import OtherImage from '../public/other_hero.png';
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { RiTwitterLine } from "react-icons/ri";


const Navbar = () => {
return (
    <header className="container mx-auto px-[60px] h-[120vh] relative bg-white">
        <nav className='py-4 flex items-center justify-between'>
            <img src={Logo} alt='Logo' width={120} height={120} />
            <h2 className='text-orange-500 cursor-default text-xl font-black underline uppercase leading-[29px]'>acceuil</h2>
            <Link to="/contact" className='p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>
                Contactez-nous
            </Link>
        </nav>
        <section className='absolute top-[-30%] left-[-10%]'>
            <img src={OtherImage} alt="circles"/>
        </section>
        <section className='h-[78vh] mt-8 flex'>
            <article className='w-[580px] flex flex-col gap-2 justify-center grow'>
                <h1 className='text-gray-900 text-[54px] font-bold leading-[60px]'>Nous fournissons la meilleure nourriture pour vous</h1>
                <p className='text-gray-500 text-base font-medium leading-[29px] w-[376px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet mollitia perferendis odit cum iusto ullam consectetur.</p>
                <div className='w-max my-3'>
                    <Link to="/about">
                        <button className='capitalize w-[120px] p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-[#101A24] text-white text-base font-bold leading-[29px]'>à propos</button>
                    </Link>
                    <button className='capitalize w-[167px] p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px] mx-8'>shop</button>
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
            <section className='w-[580px] relative grow'>
                <img src={ImageHero} alt="hero page" p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold className='absolute top-[-15%] left-[-15%]' />
            </section>
        </section>
    </header>
)
}

export default Navbar
