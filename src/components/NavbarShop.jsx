import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../public/logo_qg.png'
import ShopFood from '../public/shop_food.png'
import ShopFoodOne from '../public/shop_food_one.png'
import ShopFoodTwo from '../public/shop_food_two.png'
import ShopHeroFood from '../public/shop_hero_food.png'
import ShopHeroFoodOne from '../public/shop_hero_food_one.png'
import ShopHeroFoodTwo from '../public/shop_hero_food_two.png'
import Tomate from '../public/tomate.png'
import TomateOne from '../public/tomate_one.png'
import TomateTwo from '../public/tomate_two.png'
import Rectangle from '../public/Rectangle_one.png'
import RectangleThree from '../public/Rectangle_three.png'
import Leaf from '../public/leaf.png'
import LeafOne from '../public/leaf_one.png'
import Circle from '../public/circle.png'
import CircleOne from '../public/circle_one.png'
import CircleTwo from '../public/circle_two.png'
import Orange from '../public/orange.png'
import OrangeOne from '../public/orange_one.png'
import Chily from '../public/chily.png'
import ChilyOne from '../public/chily_one.png'
import Garlic from '../public/garlic.png'
import RectangleTwo from '../public/Rectangle_two.png'
import { PiQuotesFill } from "react-icons/pi"
import {Menus} from '../actions/menus'
import { motion } from 'framer-motion'


const NavbarShop = () => {
    return(
        <header className='relative px-[60px]'>
            <nav className='py-8 flex flex-wrap justify-center gap-14 items-center lg:gap-0 lg:flex-nowrap lg:container lg:mx-auto lg:px-[60px] lg:py-4 lg:flex lg:items-center lg:justify-between'>
                <Link to="/">
                    <img src={Logo} alt='Logo' width={120} height={120} />
                </Link>
                <h2 className='text-orange-500 cursor-default text-xl font-black underline uppercase leading-[29px]'>shop</h2>
                <Link to="/contact" className='p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold leading-[29px]'>
                    Contactez-nous
                </Link>
            </nav>
            <section className='absolute z-[-10] left-0 top-[2%]'>
                <img src={Tomate} alt="first tomato" />
            </section>
            <section className='absolute z-[-10] top-[3%] right-0'>
                <img src={Rectangle} alt="rectangle" />
            </section>
            <section className='absolute z-[-10] top-[9%] left-0'>
                <img src={Leaf} alt="leaf" />
            </section>
            <section className='absolute z-[-10] top-[3%] left-0'>
                <img src={Circle} alt="circle"/>
            </section>
            <section className='absolute top-[7.5%] right-0'>
                <img src={Orange} alt="orange"/>
            </section>
            <section className='absolute top-[18%] left-0'>
                <img src={OrangeOne} alt="orange one"/>
            </section>
            <section className='absolute top-[21%] right-0'>
                <img src={CircleOne} alt="circle one" />
            </section>
            <section className='absolute top-[23%] right-0'>
                <img src={LeafOne} alt="leaf one" />
            </section>
            <section className='absolute z-[-10] top-[28%] left-[26%]'>
                <img src={ShopFoodTwo} alt="shop food two" />
            </section>
            <section className='absolute top-[30%] left-0'>
                <img src={RectangleTwo} alt="rectangle" />
            </section>
            <section className='absolute top-[34%] left-0'>
                <img src={Leaf} alt="leaf one" />
            </section>
            <section className='absolute top-[32%] right-0'>
                <img src={TomateOne} alt="tomate one" />
            </section>
            <section className='absolute top-[60%] left-0'>
                <img src={Circle} alt="circle"/>
            </section>
            <section className='absolute top-[70%] left-0'>
                <img src={Chily} alt="chily" />
            </section>
            <section className='absolute top-[80%] right-0'>
                <img src={ChilyOne} alt="chily one"/>
            </section>
            <section className='absolute bottom-0 left-0'>
                <img src={CircleTwo} alt="circle two" />
            </section>
            <section className='absolute bottom-0 left-0'>
                <img src={TomateTwo} alt="Tomate Two" />
            </section>
            <section className='absolute bottom-[-4%] right-0'>
                <img src={RectangleThree} alt="Rectangle Three" />
            </section>
            <section className='absolute z-[-10] bottom-[-2%] right-[14%]'>
                <img src={Garlic} alt="garlic" />
            </section>
            <section className='h-[2000vh] md:h-[1400vh] lg:h-[1050vh] xl:h-[820vh] bg-stone-200/50'>
                <article className='h-[60vh] relative flex flex-col items-center justify-center gap-4'>
                    <section className='absolute top-0 left-[30%]'>
                        <img src={ShopFood} alt=" shop food " />
                    </section>
                    <motion.h1 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='text-center w-[80%] text-gray-900 scale-[0.9] md:scale-[1] text-[32px] lg:text-[54px] font-bold lg:leading-[72px] font-davidlibre'>
                        Découvrez Notre Menu Étoilé de Saveurs Exquises
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='w-[80%] lg:w-[599px] text-center scale-[0.9] md:scale-[1] text-gray-500 text-base font-medium leading-[29px]'>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                    </motion.p>
                    <section className='lg:absolute absolute bottom-[-5%] z-[-10] lg:z-0 left-[-20%] lg:bottom-[5%] lg:left-[5%]'>
                        <img src={ShopFoodOne} alt="shop food one" />
                    </section>
                    <section className='absolute bottom-[-24%] z-[-10] lg:z-0 right-[-20%] lg:absolute lg:bottom-0 lg:right-[5%]'>
                        <img src={ShopFoodTwo} alt="shop food two" />
                    </section>
                </article>
                <motion.section initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='relative flex h-[50vh] lg:h-[60vh]'>
                    <section className='absolute z-[-10] lg:z-0 top-0 left-[20%]'>
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
                </motion.section>
                <motion.article initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='gap-4 relative flex flex-col items-center justify-center h-[60vh]'>
                    <section className='absolute top-[20%] right-[24%]'>
                        <PiQuotesFill className='w-[32px] h-[32px] rotate-180' />
                    </section>
                    <h2 className='text-center text-gray-900 text-[32px] lg:text-[54px] font-bold leading-[65px] font-davidlibre'>Shop</h2>
                    <p className='w-[80%] lg:w-[376px] text-center text-gray-500 text-base font-medium leading-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <section className='lg:absolute lg:bottom-[6%] lg:right-[10%] z-[-10] lg:z-0 absolute bottom-[-5%] right-[-5%]'>
                        <img src={ShopFoodTwo} alt="shop food two"/>
                    </section>
                </motion.article>
                <section className='gap-[80px] md:gap-[40px] justify-center my-[32px] flex flex-wrap h-[1800vh] md:h-[1100vh] lg:h-[640vh]'>
                    {Menus.map((menu) => (
                        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 0.5 }} className='w-[350px] h-[350px] bg-zinc-800 scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-[1] rounded-[15px] shadow' key={menu.id}>
                        <section className='relative justify-end  h-[175px] flex'>
                            <div className='absolute top-[-64%] left-[-20%]'>
                                <img src={menu.image} alt={menu.titre} />
                            </div>
                            <article className='flex items-end justify-center w-[175px]'>
                                <p className='text-center text-white text-[24px] font-bold mb-8'>{menu.prix}</p>
                            </article>
                        </section>
                        <article className='flex flex-col gap-4 h-[175px]'>
                            <div className='pl-4'>
                                <h2 className='text-white text-[24px] font-bold'>{menu.titre}</h2>
                                <p className='text-white text-xl font-medium'>{menu.subtitre}</p>
                            </div>
                            <div className='flex items-center justify-center h-[86px]'>
                                <button className='w-[301px] h-[46px] pl-[99px] pr-[97px] pt-[9px] text-orange-500 text-xl font-bold pb-2.5 bg-white rounded-[10px] justify-center items-center inline-flex'>
                                    {menu.button}
                                </button>
                            </div>
                        </article>
                    </motion.section>
                    )) }
                </section>
            </section>
        </header>
    )
}

export default NavbarShop