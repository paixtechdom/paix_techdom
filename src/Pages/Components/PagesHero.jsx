import { Button } from "../../Components/Button"
import { Parallax } from "../../Components/Parallax"

export const PagesHero = ({image, header, text}) => {
    return(
        <Parallax id='abouthero' className={'w-[100vw] h-fit center relative mt-[7.5vh]'}>

            <div className="flex w-11/12 lg:w-10/12 xl:w-9/12 justify-between items-center h-[80vh] z-10 gap-9 overflow-hidden relative">
                <div className="flex flex-col w-8/12 z-20 gap-4"> 
                    <h1 className="text-5xl text-blue-600">
                        {header}
                    </h1>
                    <p className="text-sm text-gray-300">
                        {text}
                    </p>
                    <Button text={'Read more'} icon={'arrow-down'} className={'w-fit'}/>
                </div>

                    
                <div className="flex w-4/12 bg-gradient-to-r from-[rgba(0,0,24)] via-[rgba(0,0,24)] to[rgba(0,0,0,0.5)] z-10">
                    <img src={image} alt="About Paix Techdom Image" className="h-fit w-full z-0 top-0 right-0"/>
                </div>
            </div>    

        </Parallax>
    )
}