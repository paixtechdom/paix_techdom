import { useContext, useEffect, useState } from "react";
import { BreadCrumbs } from "../Components/BreadCrumbs";
import { AppContext } from "../../App";
import quote from '../../assets/img/quote.png'
import { PagesHero } from "../Components/PagesHero";
import { Parallax } from "../../Components/Parallax";
import { QuoteForm } from "./QuoteForm";


const Quote = () => {
    const { setCurrentNav } = useContext(AppContext) 

    useEffect(() => {
        setCurrentNav(4)
        document.documentElement.scrollTop = 0
    }, [])

    
    return(
        <div className="bg-blue-fade flex flex-col items-center  overflow-hidden pt-9">
                    
            <PagesHero 
                image={quote} 
                header={'Get a quote'} 
                text={[
                    'Fill out the form below with this and that to do this and that',
                    'Right now i wanna faint.']} 
                scrollTo={'Values'}
            />
            
        <BreadCrumbs links={['Home', 'Get a Quote']}/>
        
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 mt-[9ch]">
            <QuoteForm />
        </div>


    </div>
    )
}


export default Quote;