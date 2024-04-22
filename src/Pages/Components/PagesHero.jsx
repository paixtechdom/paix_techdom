import { Button } from "../../Components/Button"
import { Parallax } from "../../Components/Parallax"

export const PagesHero = ({image, header, text, scrollTo}) => {
    return(
        <Parallax id='abouthero' className={'w-[100vw] h-fit  lg:h-[90vh] center relative '}>

            <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 xl:w-9/12 justify-between items-center h-full z-10 gap-9 overflow-hid den relative">
                <div className="flex flex-col w-full lg:w-8/12 z-20 gap-4 pt-[9ch]"> 
                    <h1 className="text-5xl text-blue-600">
                        {header}
                    </h1>
                    <div className="text-sm flex flex-col gap-3 text-gray-300 tracking-wide leading-relaxed">
                        {
                            text.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))
                        }
                    </div>
                    <Button text={'Read more'} icon={'arrow-down'} className={'w-fit'} func={() => {
                        document.querySelector(`#${scrollTo}`).scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}/>
                </div>

                    
                <div className="flex w-full lg:w-5/12 bg-gradient-to-r from-[rgba(0,0,24)] via-[rgba(0,0,24)] to[rgba(0,0,0,0.5)] z-10">
                    <img src={image} alt="About Paix Techdom Image" className="h-fit w-full z-0 top-0 right-0  rounded-tl-[25px] rounded-bl-[150px] rounded-tr-[150px] rounded-br-[25px]"/>
                </div>
            </div>    

        </Parallax>
    )
}