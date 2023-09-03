import React from 'react'
import AboutOne from '../public/about_one.png'

const ProductAbout = () => {
return (
    <main className='container mx-auto px-[60px]'>
        <section className="flex h-[180vh]">
            <section className='grow w-[580px] py-32'>
                <img src={AboutOne} alt="about one" />
            </section>
            <section className='grow py-32 relative'> 
                <article className='w-[510px] absolute top-[10%] left-[-30%]'>
                    <h1 className='text-black text-5xl font-bold leading-[64px]'>Historique de QG</h1>
                    <p className='text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='text-justify text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.</p>
                </article>
                <article className='w-[406px] mx-4 mt-[290px]'>
                    <p className='text-justify text-neutral-600 text-2xl font-normal leading-[33.60px] tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.</p>
                </article>
            </section>
        </section>
    </main>
)
}

export default ProductAbout
