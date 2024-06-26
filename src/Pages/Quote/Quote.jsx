import { useContext, useEffect, useState } from "react";
import { BreadCrumbs } from "../Components/BreadCrumbs";
import { AppContext } from "../../App";
import quote from '../../assets/img/quote.png'
import { PagesHero } from "../Components/PagesHero";
import { Parallax } from "../../Components/Parallax";
import { QuoteForm } from "./QuoteForm";
import { Helmet } from "react-helmet-async"



const Quote = () => {
    const { setCurrentNav } = useContext(AppContext) 

    useEffect(() => {
        setCurrentNav(4)
        document.documentElement.scrollTop = 0
    }, [])

    
    return(
        <>
            <Helmet>
                <title>
                    Get a quote at Paix Techdom
                </title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-R61QXZTRLE"></script>
                <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-R61QXZTRLE');
                </script>
            </Helmet>
            <main className="bg-blue-fade flex flex-col items-center  overflow-hidden pt-9">

                <PagesHero 
                    image={quote} 
                    header={'Get a quote'} 
                    text={[
                        'Fill out the form below with this and that to do this and that',
                        'Right now i wanna faint.']} 
                    scrollTo={'Values'}
                />
                
            <BreadCrumbs links={['Home', 'Get a Quote']}/>
            
            <section className="w-11/12 lg:w-10/12 xl:w-9/12 mt-[9ch]">
                <QuoteForm />
            </section>


        </main>
        </>
    )
}


export default Quote;