import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../public/logo_qg.png';
import ImageHero from '../public/image_hero.png';

const Navbar = () => {
return (
    <header className="w-full h-screen relative bg-white">
        <nav className='py-4 flex items-center justify-between'>
            <img src={Logo} alt='Logo' width={120} height={120} />
            <h2 className='text-orange-500 cursor-default text-xl font-black underline uppercase leading-[29px]'>acceuil</h2>
            <Link to="/contact" className='p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>
                Contactez-nous
            </Link>
        </nav>
        <section className='h-[78vh] flex'>
            <article className='w-[580px] flex flex-col gap-2 justify-center grow'>
                <h1 className='text-gray-900 text-[60px] font-bold leading-[72px]'>Nous fournissons la meilleure nourriture pour vous</h1>
                <p className='text-gray-500 text-base font-medium leading-[29px] w-[376px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet mollitia perferendis odit cum iusto ullam consectetur.</p>
                <div>
                    <button className='capitalize w-[120px] p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-[#101A24] text-white text-base font-bold leading-[29px]'>à propos</button>
                    <button className='capitalize w-[167px] p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>shop</button>
                </div>
            </article>
            <section className='w-[580px] relative grow'>
                <img src={ImageHero} alt="hero page" width={600} height={748} className='absolute top-[-10%] left-[-20%]' />
            </section>
        </section>
    </header>
)
}

export default Navbar
