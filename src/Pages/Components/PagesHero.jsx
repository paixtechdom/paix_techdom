import { Button } from "../../Components/Button"
import { Parallax } from "../../Components/Parallax"

export const PagesHero = ({image, header, text, scrollTo, button}) => {
    return(
        <Parallax id='abouthero' className={'w-[100vw] h-fit  lg:min-h-[70vh] center relative '}>

            <div className="flex flex-col lg:flex-row w-[90%] lg:w-10/12 xl:w-9/12 justify-between items-center h-full z-10 gap-9 overflow-hid den relative pt-[5ch]">
                <div className="flex flex-col justify-center w-full lg:w-8/12 z-20 gap-4"> 
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
                    {
                        button == false ? '' :
                        <Button text={button ? button : 'Read more'} icon={'arrow-down'} className={'w-fit'} func={() => {
                            document.querySelector(`#${scrollTo}`).scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}/>
                    }
                </div>

                    
                <div className="flex center w-full lg:w-5/12 z-10 relative">
                    <div className="absolute w-full h-full border border-blue-900 border-2 rounded-3xl -bottom-[15px] -right-[15px] scale-90">

                    </div>
                    <img src={image} alt="About Paix Techdom Image" className="h-fit w-full z-0 top-0 right-0 rounded-3xl scale-90 -translate-x-[10px] -translate-y-[10px]"/>
                </div>
            </div>    

        </Parallax>
    )
}