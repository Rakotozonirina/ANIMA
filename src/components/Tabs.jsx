import React, {useState} from 'react'
import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
} from "tw-elements-react"
import Honey from '../public/honey.png'
import ShopMenuFoodOne from '../public/shop_menu_food_one.png'
import ShopMenuFoodTwo from '../public/shop_menu_food_two.png'
import ShopMenuFoodThree from '../public/shop_menu_food_three.png'
import ShopMenuFoodFour from '../public/shop_menu_food_four.png'
import { motion } from 'framer-motion'


const Datas = [
    {
        id: 1,
        image:Honey,
        prix: "15000 Ar",
        titre:"Honey",
        subtitre:"With Special Sauce",
        button:"Commande"
    },
    {
        id: 2,
        image:ShopMenuFoodOne,
        prix:"10 000 Ar",
        titre:"Mixed Salad",
        subtitre:"With Special Sauce",
        button:"Commande"
    },
    {
        id: 3,
        image:ShopMenuFoodTwo,
        prix:"20 000 Ar",
        titre:"Chicken Spaghetti",
        subtitre:"With Special Sauce",
        button:"Commande"
    },
    {
        id: 4,
        image:ShopMenuFoodThree,
        prix: "$ 10.99",
        titre:"Vegan Chinese",
        subtitre:"With Special Sauce",
        button:"Commande"
    },
    {
        id: 5,
        image:ShopMenuFoodFour,
        prix: "$ 10.99",
        titre:"Chessy Pizza",
        subtitre:"With Special Sauce",
        button:"Commande"
    }
]

const Tabs = () => {
    const [basicActive, setBasicActive] = useState("tab1");
    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };
    return(
        <section className="px-[60px]">
            <TETabs>
                <TETabsItem
                onClick={() => handleBasicClick("tab1")}
                active={basicActive === "tab1"}
                className="text-center text-black text-xl font-bold"
                color="warning"
                >
                Miel
                </TETabsItem>
                <TETabsItem
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
                color="warning"
                >
                Epice
                </TETabsItem>
                <TETabsItem
                onClick={() => handleBasicClick("tab3")}
                active={basicActive === "tab3"}
                color="warning"
                >
                Fruits transformé
                </TETabsItem>
                <TETabsItem
                onClick={() => handleBasicClick("tab4")}
                active={basicActive === "tab4"}
                color="warning"
                >
                Grain sec
                </TETabsItem>
            </TETabs>

        <TETabsContent className='flex items-center justify-center h-[230vh]'>
            <TETabsPane show={basicActive === "tab1"} className='h-[200vh] flex my-[32px] flex-wrap gap-[40px] items-center justify-center'>
            {Datas.map((menu) => (
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className='w-[350px] h-[350px] bg-zinc-800 scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-[1] rounded-[15px] shadow' key={menu.id}>
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
            </TETabsPane>
            <TETabsPane show={basicActive === "tab2"}>Tab 2 content</TETabsPane>
            <TETabsPane show={basicActive === "tab3"}>Tab 3 content</TETabsPane>
            <TETabsPane show={basicActive === "tab4"}>Tab 4 content</TETabsPane>
        </TETabsContent>
        </section>
    )
}

export default Tabs