import { useEffect, useState } from "react"
import { Questions } from "../../assets/Constants"
import { GridSlider } from "./GridSlider"
import { Parallax } from "../../Components/Parallax"

export const FAQ = () => {
    return(
        <div id="FAQ" className="center flex-col py-[9ch]">   
            <div className="w-11/12 lg:w-10/12 xl:w-9/12  flex-col">
                <Parallax id={'faq'} className={''}>
                    <h3 className="text-3xl w-full text-blue-600">Frequently Asked Questions (FAQ) </h3>

                </Parallax>


            </div>
                <GridSlider data={Questions}/>

        </div>
    )
}
