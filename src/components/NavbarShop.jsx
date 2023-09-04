import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../public/logo_qg.png'
import ShopFood from '../public/shop_food.png'
import ShopFoodOne from '../public/shop_food_one.png'
import ShopFoodTwo from '../public/shop_food_two.png'
import ShopHeroFood from '../public/shop_hero_food.png'
import ShopHeroFoodOne from '../public/shop_hero_food_one.png'
import ShopHeroFoodTwo from '../public/shop_hero_food_two.png'

const NavbarShop = () => {
    return(
        <header className='relative px-[60px]'>
            <nav className='container mx-auto px-[60px] py-4 flex items-center justify-between'>
                <Link to="/">
                    <img src={Logo} alt='Logo' width={120} height={120} />
                </Link>
                <h2 className='text-orange-500 cursor-default text-xl font-black underline uppercase leading-[29px]'>shop</h2>
                <Link to="/contact" className='p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>
                    Contactez-nous
                </Link>
            </nav>
            <section className='h-[650vh] bg-stone-200'>
                <article className='h-[60vh] relative flex flex-col items-center justify-center gap-4'>
                    <section className='absolute top-0 left-[30%]'>
                        <img src={ShopFood} alt=" shop food " />
                    </section>
                    <h1 className='text-center text-gray-900 text-[66px] font-bold leading-[72px]'>
                        Découvrez Notre Menu Étoilé de Saveurs Exquises
                    </h1>
                    <p className='w-[599px] text-center text-gray-500 text-base font-medium leading-[29px]'>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                    </p>
                    <section className='absolute bottom-[5%] left-[5%]'>
                        <img src={ShopFoodOne} alt="shop food one" />
                    </section>
                    <section className='absolute bottom-0 right-[5%]'>
                        <img src={ShopFoodTwo} alt="shop food two" />
                    </section>
                </article>
                <section className='relative flex h-[60vh]'>
                    <section className='absolute top-0 left-[20%]'>
                        <img src={ShopFoodTwo} alt="shop food two" />
                    </section>
                    <section>
                        <img src={ShopHeroFood} alt="shop hero food" />
                    </section>
                    <section>
                        <img src={ShopHeroFoodOne} alt="shop hero food one" />
                    </section>
                    <section>
                        <img src={ShopHeroFoodTwo} alt="shop hero food two" />
                    </section>
                </section>
            </section>
        </header>
    )
}

export default NavbarShop