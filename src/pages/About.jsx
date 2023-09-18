import React, {useState, useEffect} from 'react'
import NavbarAbout from '../components/NavbarAbout'
import ProductAbout from '../components/ProductAbout'
import Footer from '../components/Footer'

const About = () => {
    const [scrollTop, setScrollTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 340){
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
return (
    <div>
        <NavbarAbout/>
        <ProductAbout/>
        <Footer/>
        { scrollTop && (
            <button onClick={bottomToTop} className='p-2.5 rounded-full text-white bg-amber-400 fixed bottom-[25px] right-[25px]'>
                &#8593;
            </button>
        ) }
    </div>
)
}

export default About
