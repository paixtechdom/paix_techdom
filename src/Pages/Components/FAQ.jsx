import { useEffect, useState } from "react"
import { Questions } from "../../assets/Constants"
import { GridSlider } from "./GridSlider"
import { Parallax } from "../../Components/Parallax"

export const FAQ = () => {
    const [ currentQuestion, setCurrentQuestion ] = useState(Questions[0].id)
    return(
        <div id="FAQ" className="center flex-col py-[9ch]">   
            <div className="w-11/12 lg:w-10/12 xl:w-9/12  flex-col">
                <Parallax id={'faq'} className={''}>
                    <h3 className="text-3xl w-full text-blue-600">Frequently Asked Questions (FAQ) </h3>

                </Parallax>


            </div>
            <div className="flex flex-col w-11/12 lg:w-10/12 xl:w-9/12 lg:flex-row gap-[50px] overflow-hidden mt-9">
                
                <div className="flex flex-col w-full">
                    {/* <div className="flex flex-col h-full w-full md:w-10/12"> */}
                    <div className="grid md:grid-cols-2 w-full gap-x-9">
                        {
                            Questions.map((question, i) => (
                                <div key={i} className={`flex h-full`}>
                                    <Question question={question} i={i}
                                    currentQuestion={currentQuestion}
                                    setCurrentQuestion={setCurrentQuestion}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}



const Question = ({question, i, currentQuestion, setCurrentQuestion}) => {


    return(
        <Parallax id={`questions${question.title[0]}${question.title[1]}`} className={'flex gap-2 w-full'}>

            <div className={`flex flex-col w-full gap-3 mb-[5vh] lg:mb-[10vh] xl:mb-[12vh] rounded-2xl border border-blue-900 p-4 overflow-hidden`}>
                <div className="flex relative w-fi center h-12 md:h-16 w-2/12 md:w-3/12 p-3 mb-3">
                    <div className="absolute border border-blue-900 top-0 left-50 w-12 h-12 md:w-16 md:h-16 rotate-45 rounded-tl-[25px] rounded-br-[25px]"></div>
                    <i className={`bi bi-${question.icon} text-2xl md:text-4xl text-blue-400`}></i>
                </div>

                <div className="flex justify-between items-start gap-9">
                    <h3 className="text-blue-600 text-xl">
                        {question.title}
                    </h3>
                    <i className={`bi bi-${currentQuestion == question.id ? 'eye-slash-fill' : 'eye-fill'} text-4xl text-blue-600 cursor-pointer bord er border-blue-600 center`} onClick={() => setCurrentQuestion(question.id == currentQuestion ? '' : question.id)}></i>
                </div>


                <p className={`text-gray-300 tracking-wide leading-relaxed text-[15px] ${currentQuestion == question.id ? '' : 'hidden'}`}>{question.desc}</p>
            </div>
        </Parallax>
    )
}