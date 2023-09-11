import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../public/logo_qg.png'
import ShopFood from '../public/shop_food.png'
import ShopFoodOne from '../public/shop_food_one.png'
import ShopFoodTwoOther from '../public/shop_food_two.png'
import ShopHeroFood from '../public/shop_hero_food.png'
import ShopHeroFoodOne from '../public/shop_hero_food_one.png'
import ShopHeroFoodTwo from '../public/shop_hero_food_two.png'
import ShopFoodTwo from '../public/shop_food_two.png'
import Tomate from '../public/tomate.png'
import Rectangle from '../public/Rectangle_one.png'
import Leaf from '../public/leaf.png'
import Circle from '../public/circle.png'
import Orange from '../public/orange.png'
import { PiQuotesFill } from "react-icons/pi"
import Tabs from './Tabs'

const NavbarList = () => {
    return(
        <header className='xl:h-[450vh] relative px-[60px]'>
            <nav className='py-8 flex flex-wrap justify-center gap-14 items-center lg:gap-0 lg:flex-nowrap lg:container lg:mx-auto lg:px-[60px] lg:py-4 lg:flex lg:items-center lg:justify-between'>
                <Link to="/">
                    <img src={Logo} alt='Logo' width={120} height={120} />
                </Link>
                <h2 className='text-orange-500 cursor-default text-xl font-black underline uppercase leading-[29px]'>liste des produits</h2>
                <Link to="/contact" className='p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>
                    Contactez-nous
                </Link>
            </nav>
            <section className='absolute z-[-10] left-0 top-[12%]'>
                <img src={Tomate} alt="first tomato" />
            </section>
            <section className='absolute z-[-10] top-[10%] right-0'>
                <img src={Rectangle} alt="rectangle" />
            </section>
            <section className='absolute z-[-10] top-[40%] left-0'>
                <img src={Leaf} alt="leaf" />
            </section>
            <section className='absolute z-[-10] top-[20%] left-0'>
                <img src={Circle} alt="circle"/>
            </section>
            <section className='absolute top-[30%] right-0'>
                <img src={Orange} alt="orange"/>
            </section>
            <section className='h-[440vh] bg-stone-200/50'>
                <article className='h-[60vh] relative flex flex-col items-center justify-center gap-4'>
                    <section className='absolute top-0 left-[30%]'>
                        <img src={ShopFood} alt=" shop food " />
                    </section>
                    <h1 className='text-center text-gray-900 scale-[0.9] md:scale-[1] text-[32px] lg:text-[54px] w-[80%] font-bold lg:leading-[72px] font-davidlibre'>
                        Découvrez Notre Menu Étoilé de Saveurs Exquises
                    </h1>
                    <p className='w-[80%] lg:w-[599px] text-center scale-[0.9] md:scale-[1] text-gray-500 text-base font-medium leading-[29px]'>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                    </p>
                    <section className='lg:absolute absolute bottom-[-5%] z-[-10] lg:z-0 left-[-20%] lg:bottom-[5%] lg:left-[5%]'>
                        <img src={ShopFoodOne} alt="shop food one" />
                    </section>
                    <section className='absolute bottom-[-24%] z-[-10] lg:z-0 right-[-20%] lg:absolute lg:bottom-0 lg:right-[5%]'>
                        <img src={ShopFoodTwo} alt="shop food two" />
                    </section>
                </article>
                <section className='relative flex h-[50vh] lg:h-[60vh]'>
                    <section className='absolute z-[-10] lg:z-0 top-0 left-[20%]'>
                        <img src={ShopFoodTwoOther} alt="shop food two" />
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
                <article className='gap-4 relative flex flex-col items-center justify-center h-[60vh]'>
                    <section className='absolute top-[20%] right-[24%]'>
                        <PiQuotesFill className='w-[32px] h-[32px] rotate-180' />
                    </section>
                    <h2 className='text-center text-gray-900 text-[32px] lg:text-[54px] font-bold leading-[65px] font-davidlibre'>Liste des produits</h2>
                    <p className='w-full lg:w-[376px] text-center text-gray-500 text-base font-medium leading-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <section className='lg:absolute lg:bottom-[6%] lg:right-[10%] z-[-10] lg:z-0 absolute bottom-[-5%] right-[-5%]'>
                        <img src={ShopFoodTwo} alt="shop food two"/>
                    </section>
                </article>
                <section className='h-[150vh]'>
                    <Tabs/>
                </section>
            </section>
        </header>
    )
}

export default NavbarList