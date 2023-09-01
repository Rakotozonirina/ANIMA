import React from 'react'
import IlustrationFlower from '../public/illustration_flower.png'
import IlustrationFlowerOne from '../public/illustration_flower_one.png'
import Food from '../public/food.png'
import FoodOne from '../public/food_one.png'
import FoodTwo from '../public/food_two.png'
import FoodThree from '../public/food_three.png'

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
        <main className='bg-gray-900/25 w-full mx-auto px-[60px] h-[200vh]'>
            <section className='flex flex-col gap-[150px]'>
                <section className='flex items-center justify-center gap-4'>
                    <div>
                        <img src={IlustrationFlower} alt="premier illustration flower" width={224} height={212} />
                    </div>
                    <article className='flex flex-col items-center justify-center'>
                        <h1 className='text-center text-gray-900 text-6xl font-bold leading-[65px]'>Nos plats spéciaux</h1>
                        <p className='w-[376px] text-center text-gray-500 text-base font-medium leading-[29px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla qui nostrum Nulla qui nostrum</p>
                    </article>
                    <div>
                        <img src={IlustrationFlowerOne} alt="deuxième illustration flower" width={180} height={253} />
                    </div>
                </section>
                <section className='relative flex items-center justify-center gap-4'>
                    {Datas.map((Data) => (
                        <section className='w-[265px] h-[309px] border border-white flex items-end justify-center relative shadow-lg rounded-tl-[12px] rounded-br-[12px]' key={Data.id}>
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
                        </section>
                    )) }
                    <section></section>
                    <section></section>
                    <section></section>
                </section>
            </section>
        </main>
    )
}

export default Product