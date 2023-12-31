import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import IlustrationFlower from '../public/illustration_flower.png'
import IlustrationFlowerOne from '../public/illustration_flower_one.png'
import IlustrationFlowerTwo from '../public/illustration_flower_two.png'
import IlustrationFlowerThree from '../public/illustration_flower_three.png'
import IlustrationFlowerFour from '../public/illustration_flower_four.png'
import IlustrationFlowerFive from '../public/illustration_flower_five.png'
import IlustrationFlowerSix from '../public/illustration_flower_six.png'
import IlustrationFlowerSeven from '../public/illustration_flower_seven.png'
import IlustrationFlowerHeight from '../public/illustration_flower_height.png'
import IlustrationFlowerNine from '../public/illustration_flower_nine.png'
import IlustrationFlowerTen from '../public/illustration_flower_ten.png'
import Food from '../public/food.png'
import FoodOne from '../public/food_one.png'
import FoodTwo from '../public/food_two.png'
import FoodThree from '../public/food_three.png'
import HeroFood from '../public/hero_food.png'
import Chef from '../public/chef_1.png'

const Datas = [
    {
        id: 1,
        img: Food,
        altImg: 'premier plats',
        subTitle: 'Lumpia with Suace',
        para: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
        id: 2,
        img: FoodOne,
        altImg: 'deuxième plats',
        subTitle: 'Fish and Veggie',
        para: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
        id: 3,
        img: FoodTwo,
        altImg: 'troisième plats',
        subTitle: 'Tofu Chili',
        para: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
        id: 4,
        img: FoodThree,
        altImg: 'quatrième plats',
        subTitle: 'Egg and Cocumber',
        para: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor'
    }
]

const Product = () => {
    return(
        <main>
                <div className='bg-gray-900/25 w-full flex flex-col gap-[200px] mx-auto px-[60px] h-[450vh] md:h-[420vh] lg:h-[300vh] xl:h-[250vh]'>
                <section className='flex flex-col gap-[150px]'>
                    <section className='flex items-center justify-center gap-4'>
                        <div>
                            <img src={IlustrationFlower} alt="premier illustration flower" width={224} height={212} />
                        </div>
                        <motion.article initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='flex flex-col items-center justify-center'>
                            <h1 className='text-center text-gray-900 text-[32px] lg:text-[54px] font-bold leading-[65px] font-davidlibre'>Nos plats spéciaux</h1>
                            <p className='w-[376px] text-center text-gray-500 text-base font-medium leading-[29px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla qui nostrum Nulla qui nostrum</p>
                        </motion.article>
                        <div>
                            <img src={IlustrationFlowerOne} alt="deuxième illustration flower" width={180} height={253} />
                        </div>
                    </section>
                    <section className='relative flex flex-wrap gap-[100px] justify-center lg:flex lg:items-center lg:justify-center lg:gap-6'>
                        {Datas.map((Data, index) => (
                            <motion.section initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className={`w-[265px] h-[309px] border border-white flex items-end justify-center relative shadow-lg rounded-tl-[12px] rounded-br-[12px] ${index === 0 ? 'bg-slate-100' : 'bg-transparent'}`} key={Data.id}>
                                <section className='absolute top-[-30%] left-[10%]'>
                                    <div className='relative flex items-center justify-center'>
                                        <img src={Data.img} alt={Data.altImg} />
                                        <span className='w-[54px] h-[54px] bg-gray-900 rounded-full flex items-center justify-center text-white text-base font-bold leading-relaxed absolute top-[15%] right-[6%]'>$12</span>
                                    </div>
                                </section>
                                <article className='my-8'>
                                    <h2 className='text-gray-900 text-center text-xl font-bold leading-relaxed'>{Data.subTitle}</h2>
                                    <p className='w-[225px] text-center text-gray-500 text-[15px] font-medium leading-relaxed'>{Data.para}</p>
                                </article>
                            </motion.section>
                            )
                        ) }
                        <section className='absolute bottom-[-10%] left-[20%]'>
                            <img src={IlustrationFlowerTwo} alt="deuxième illustration" />
                        </section>
                        <section className='absolute bottom-[-60%] left-[40%]'>
                            <img src={IlustrationFlowerFive} alt="quatrième illustration" />
                        </section>
                        <section className='absolute bottom-[-10%] right-[15%]'>
                            <img src={IlustrationFlowerThree} alt="troisème illustration" />
                        </section>
                        <section className='absolute bottom-[-10%] right-0'>
                            <img src={IlustrationFlowerFour} alt="quatrième illustration" />
                        </section>
                    </section>
                </section>
                <section className='lg:flex'>
                    <div className='grow hidden md:block'>
                        <img src={HeroFood} alt="hero food" width={600} />
                    </div>
                    <article className='flex py-[64px] md:py-0 grow flex-col justify-center relative gap-4'>
                            <section>
                                <img src={IlustrationFlower} alt="premier flower" className='absolute top-0 left-[-10%]' />
                            </section>
                            <motion.h1 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='lg:w-[442px] text-gray-900 text-[32px] lg:text-[54px] font-bold leading-[65px] font-davidlibre'>Bienvenue dans notre restaurant</motion.h1>
                            <motion.p initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='lg:w-[376px] text-gray-500 text-start text-base font-medium leading-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</motion.p>
                            <Link to="/list">
                                <motion.button initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='lg:w-[448px] p-3 bg-gray-900 text-center text-white text-xl font-bold leading-[29px] shadow-lg rounded-tl-[12px] rounded-br-[12px]'>Liste des produits</motion.button>
                            </Link>
                            <section className='absolute bottom-0 left-[-30%]'>
                                <img src={IlustrationFlowerSix} alt="six flower" />
                            </section>
                            <section className='absolute bottom-[-10%] left-0'>
                                <img src={IlustrationFlowerSeven} alt="seven flower"/>
                            </section>
                            <section className='absolute bottom-0  z-[-1] md:z-0 right-[-20%] md:right-[-10%]'>
                                <img src={IlustrationFlowerHeight} alt="height flower"/>
                            </section>
                    </article>
                </section>
            </div>
            <div className='mx-auto px-[60px]  lg:flex gap-[50px] relative w-full h-[200vh] lg:h-[150vh] xl:h-[120vh]'>
                <section className='absolute top-[14%] left-0'>
                    <img src={IlustrationFlowerNine} alt="Nine flower"/>
                </section>
                <section className='absolute top-[5%] left-[7%]'>
                    <img src={IlustrationFlowerTen} alt="Ten flower" />
                </section>
                <motion.article initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='flex lg:px-[60px] gap-4 flex-col justify-center grow lg:w-[577px]'>
                    <h2 className='text-gray-900 text-[32px] lg:text-[54px] font-bold font-davidlibre leading-[65px]'>
                        <span className='uppercase'>à</span> propos de nous
                    </h2>
                    <p className='text-justify text-gray-500 text-base font-medium leading-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='lg:w-[167px] p-3 shadow-lg rounded-tl-lg rounded-br-lg bg-orange-500 text-white text-base font-bold'>
                        Voir plus
                    </button>
                </motion.article>
                <section className='grow pt-8'>
                    <img src={Chef} alt=" chef "/>
                </section>
            </div>
        </main>
        
    )
}

export default Product