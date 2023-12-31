import React from 'react'
import ImgLogo from '../public/logo_qg.png'
import IlustrationFlowerEleven from '../public/illustration_flower_eleven.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { RiTwitterLine } from "react-icons/ri";

const Footer = () => {
return (
    <footer className='h-[120vh] lg:h-[624px] relative flex flex-col justify-center gap-[80px] bg-zinc-100 mx-auto px-[60px]'>
        <section className='lg:flex justify-between lg:px-[60px]'>
            <section>
                <section>
                    <div>
                        <img src={ImgLogo} alt="logo"/>
                    </div>
                    <article>
                        <p className='lg:w-[485px] my-2 text-gray-500 text-base font-normal leading-[29px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </article>
                </section>
                <section>
                    <h2 className='text-gray-900 text-xs font-extrabold uppercase leading-10'>HORAIRES D'OUVERTURES</h2>
                    <table className='lg:w-[446px] w-full text-gray-500 text-base font-normal leading-[29px]'>
                        <tr>
                            <th className='py-4 lg:py-0 lg:text-start'>Lundi vendredi</th>
                            <th className='lg:text-start'>Samedi</th>
                            <th className='lg:text-start'>Dimanche</th>
                        </tr>
                        <tr>
                            <td className='py-4 lg:py-0 text-center lg:text-start'>08h00 à 21h00</td>
                            <td className='text-center lg:text-start'>08h00 à 21h00</td>
                            <td className='uppercase text-center lg:text-start'>fermé</td>
                        </tr>
                    </table>
                </section>
            </section>
            <section className='py-8 lg:py-36'>
                    <div className='flex gap-4'>
                        <span className='w-[45px] h-[45px] flex items-center justify-center rounded-full border border-gray-900'>
                            <FaFacebookF/>
                        </span>
                        <span className='w-[45px] h-[45px] flex items-center justify-center rounded-full border border-gray-900'>
                            <FaInstagram/>
                        </span>
                        <span className='w-[45px] h-[45px] flex items-center justify-center rounded-full border border-gray-900'>
                            <RiTwitterLine/>
                        </span>
                    </div>
            </section>
        </section>
        <section className='lg:px-[60px]'>
            <div className='py-4 border-t-[1px] border-gray-900'>
                <p className='text-gray-500 text-base font-normal leading-[29px]'>&copy; Restauration 2023. Tous droits réservés. Conçu par Anima Technologie</p>
            </div>
        </section>
        <section className='absolute bottom-0 right-0'>
            <img src={IlustrationFlowerEleven} alt="eleven flower" />
        </section>
    </footer>
)
}

export default Footer
