import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../public/logo_qg.png'
import ShopFood from '../public/shop_food.png'
import ShopFoodOne from '../public/shop_food_one.png'
import ShopFoodTwo from '../public/shop_food_two.png'
import ShopHeroFood from '../public/shop_hero_food.png'
import ShopHeroFoodOne from '../public/shop_hero_food_one.png'
import ShopHeroFoodTwo from '../public/shop_hero_food_two.png'
import ShopMenuFood from '../public/shop_menu_food.png'
import { PiQuotesFill } from "react-icons/pi"

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
                <article className='gap-4 relative flex flex-col items-center justify-center h-[60vh]'>
                    <section className='absolute top-[20%] right-[24%]'>
                        <PiQuotesFill className='w-[32px] h-[32px] rotate-180' />
                    </section>
                    <h2 className='text-center text-gray-900 text-6xl font-bold leading-[65px]'>Shop</h2>
                    <p className='w-[376px] text-center text-gray-500 text-base font-medium leading-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <section className='absolute bottom-[6%] right-[10%]'>
                        <img src={ShopFoodTwo} alt="shop food two" />
                    </section>
                </article>
                <section className='gap-[40px] flex flex-wrap h-[470vh]'>
                    <section className='w-[350px] h-[350px] bg-zinc-800 rounded-[15px] shadow'>
                        <section className='relative justify-end  h-[175px] flex'>
                            <div className='absolute top-[-50%] left-[-20%]'>
                                <img src={ShopMenuFood} alt="shop menu food" />
                            </div>
                            <article className='flex items-end justify-center w-[175px]'>
                                <p className='text-center text-white text-3xl font-bold mb-8'>15 000 Ar</p>
                            </article>
                        </section>
                        <article className='flex flex-col gap-4 h-[175px]'>
                            <div className='pl-4'>
                                <h2 className='text-white text-3xl font-bold'>Chicken Spaghetti</h2>
                                <p className='text-white text-xl font-medium'>With Special Sauce</p>
                            </div>
                            <div className='flex items-center justify-center h-[86px]'>
                                <button className='w-[301px] h-[46px] pl-[99px] pr-[97px] pt-[9px] text-orange-500 text-xl font-bold pb-2.5 bg-white rounded-[10px] justify-center items-center inline-flex'>
                                    Commande
                                </button>
                            </div>
                        </article>
                    </section>
                </section>
            </section>
        </header>
    )
}

export default NavbarShop