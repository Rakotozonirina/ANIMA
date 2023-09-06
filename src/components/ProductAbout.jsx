import React from 'react'
import AboutOne from '../public/about_one.png'
import AboutTwo from '../public/about_two.png'
import Slice from '../public/slice.png'
import SliceTwo from '../public/slice_bake.png'
import SliceOne from '../public/slice_one.png'
import IlustrationFlower from '../public/illustration_flower.png'
import IlustrationFlowerFour from '../public/illustration_flower_four.png'
import IlustrationFlowerThree from '../public/illustration_flower_three.png'
import IlustrationFlowerOne from '../public/illustration_flower_one.png'
import Rosemary from '../public/rosemary.png'


const ProductAbout = () => {
return (
    <main className='container mx-auto px-[60px]'>
        <section className="flex h-[180vh]">
            <section className='grow w-[580px] py-32'>
                <img src={AboutOne} alt="about one" />
            </section>
            <section className='grow py-32 relative'> 
                <article className='w-[510px] absolute top-[10%] left-[-30%]'>
                    <h1 className='text-black text-[54px] font-bold leading-[64px]'>Historique de QG</h1>
                    <p className='text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='text-justify text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.</p>
                </article>
                <article className='w-[406px] mx-4 mt-[290px]'>
                    <p className='text-justify text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.</p>
                </article>
            </section>
        </section>
        <section className='flex items-center justify-center gap-4'>
            <div>
                <img src={IlustrationFlower} alt="premier illustration flower" width={224} height={212} />
            </div>
            <article className='flex flex-col items-center justify-center'>
                <h1 className='text-center text-gray-900 text-[54px] font-bold leading-[65px]'>Présentation</h1>
                <p className='w-[376px] text-center text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla qui nostrum Nulla qui nostrum</p>
            </article>
            <div>
                <img src={IlustrationFlowerOne} alt="deuxième illustration flower" width={180} height={253} />
            </div>
        </section>
        <section>
            <img src={AboutTwo} alt="about two" />
        </section>
        <section className='h-[40vh] flex items-center justify-center'>
            <article>
                <h2 className='text-center text-black text-[54px] font-bold leading-[64px]'>Notre Marque</h2>
                <p className='w-[452px] text-center text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </article>
        </section>
        <section className='relative flex flex-col gap-[80px] h-[280vh]'>
            <section className='flex gap-4'>
                <div className='grow'>
                    <img src={Slice} alt="slice" />
                </div>
                <article className='grow w-[568px] flex flex-col justify-center'>
                    <h2 className='text-black text-[65px] font-bold leading-[105.60px]'>01.Slice</h2>
                    <p className='text-justify text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.</p>
                </article>
            </section>
            <div className='absolute top-[26%] left-[-10%]'>
                <img src={Rosemary} alt="rosemary" />
            </div>
            <section className='flex justify-between h-[180vh]'>
                <section className='flex items-end'>
                    <div className='w-[512px] h-[719px]'>
                        <article>
                            <h2 className='text-black text-[64px] font-bold leading-[105.60px]'>03.Bake</h2>
                            <p className='text-justify mb-8 text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.</p>
                        </article>
                        <section>
                            <img src={SliceTwo} alt="bake pic" />
                        </section>
                    </div>
                </section>
                <section>
                    <div className='w-[512px] h-[719px]'>
                        <section>
                            <img src={SliceOne} alt="second slice" />
                        </section>
                        <article>
                            <h2 className='text-black text-[64px] font-bold leading-[105.60px]'>02.Pickled</h2>
                            <p className='text-justify text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.</p>
                        </article>
                    </div>
                </section>
            </section>
            <div className='absolute bottom-[15%] right-[20%]'>
                <img src={IlustrationFlowerThree} alt="flower three" />
            </div>
            <div className='absolute bottom-[15%] right-0'>
                <img src={IlustrationFlowerFour} alt="flower four" />
            </div>
        </section>
    </main>
)
}

export default ProductAbout
