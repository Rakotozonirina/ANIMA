import React from 'react'
import BgContact from '../public/bg_contact.png'
import HeroImage from '../public/hero_contact.png'
import Logo from '../public/logo_qg.png'
import { motion } from 'framer-motion' 
import { BsTelephone, BsEnvelopePaper, BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Contact = () => {
return (
    <div className='bg-no-repeat flex items-center justify-center bg-bottom bg-cover object-contain' style={{backgroundImage: `url(${BgContact})`, height: '100vh'}}>
        <section className='w-[90%] h-[94vh] flex relative bg-white rounded-[50px] shadow'>
            <section className='w-[90%] md:w-[70%] sm:scale-[0.8] md:scale-[0.9] lg:scale-[0.9] xl:scale-[1]'>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}> 
                    <section className='py-2.5 px-8 sm:px-12 md:px-0 lg:px-16'>
                        <Link to="/">
                            <img src={Logo} alt="logo QG" width={100} height={200} />
                        </Link>
                    </section>
                    <article className='px-8 sm:px-12 md:px-0 lg:px-16'>
                        <h2 className='text-black text-[32px] font-bold'>Restaurant <span className="text-orange-500 text-[32px] font-bold">le QG</span></h2>
                        <p className='text-black md:w-[60%] sm:scale-[0.8] md:scale-[1] my-1 text-sm font-semibold leading-normal tracking-tight'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                    </article>
                </motion.div>
                <motion.section initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='px-8 sm:px-0 md:px-0 lg:px-16 h-[30vh] md:h-[48vh]'>
                    <form action="" className='flex flex-col justify-center gap-4 w-full md:w-[80%] lg:w-[60%] h-[48vh]'>
                        <input type="text" name="name" placeholder='Nom*'/>
                        <input type="email" name="email" placeholder='Email' />
                        <input type="tel" name="phone" placeholder='Numéro de téléphone*' />
                        <textarea name="message" cols="30" rows="2" className='border border-neutral-200 text-zinc-500 text-sm font-medium leading-normal tracking-tight p-2.5' placeholder='Message...' ></textarea>
                        <button type='submit' className='py-2.5 bg-orange-500 rounded justify-center items-center inline-flex text-white text-base font-semibold uppercase'>envoyer</button>
                    </form>
                </motion.section>
                <motion.section initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='lg:px-16 pt-[7rem] sm:pt-[9rem] md:pt-0 md:h-[10vh]'>  
                    <section className='w-full md:w-[80%] lg:w-[60%] grid grid-cols-3 md:h-[10vh]'>
                        <div className='flex items-center gap-4 scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-[1]'>
                            <span >
                                <BsTelephone/>
                            </span>
                            <article> 
                                <h2 className='font-semibold leading-tight tracking-tight'>TÉLÉPHONE</h2>
                                <p className='text-orange-500 font-normal leading-tight tracking-tight'>03 5432 1234</p>
                            </article>
                        </div>
                        <div className='flex items-center gap-4 scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-[1]'>
                            <span>
                                <BsReverseLayoutTextSidebarReverse/>
                            </span>
                            <article>
                                <h2 className='font-semibold leading-tight tracking-tight'>FAX</h2>
                                <p className='text-orange-500 font-normal leading-tight tracking-tight'>03 5432 1234</p>
                            </article>
                        </div>
                        <div className='flex items-center gap-4 scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-[1]'>
                        <span>
                            <BsEnvelopePaper/>
                        </span>
                            <article>
                                <h2 className='font-semibold leading-tight tracking-tight'>EMAIL</h2>
                                <p className='text-orange-500 font-normal leading-tight tracking-tight'>info@marcc.com.au</p>
                            </article>
                        </div>
                    </section>
                </motion.section>
            </section>
            <section className='w-[10%] md:w-[30%] rounded-r-[50px] bg-black'></section>
            <motion.section initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='absolute top-[10%] right-[10%] hidden lg:block md:scale-[0.8] lg:scale-[0.9] xl:scale-[1]'>
                <img src={HeroImage} alt="hero contact" width={500} height={700} />
            </motion.section>
        </section>
    </div>
)
}

export default Contact;
