import { Button } from "../../Components/Button"
import { useNavigate } from 'react-router-dom'
import image from '../../assets/img/beautiful-website.jpg'
import { Parallax } from "../../Components/Parallax"

const steps = [
    {
        icon: 'pencil-fill',
        title: 'Identifying your needs',
        desc: "We define and identify your needs in relation to your brand, products, services and target audience."
    },
    {
        icon: 'search',
        title: 'Research',
        desc: "We then then conduct a comprehensive research tailored to the above parameters or factore"
    },
    {
        icon: 'credit-card-2-front-fill',
        title: 'Creating a prototype',
        desc: "Based on the research we create and compile a list of possible designs appealing to your and your target audience"
    },
    {
        icon: 'columns-gap',
        title: 'Design',
        desc: "We then begin the design phase with the right and specific structure for you, ensuring the colors, font, font size, images and more are communicating your message to your audience."
    },
    {
        icon: 'code-slash',
        title: 'Development',
        desc: "In case of a need beyond design such as a custom website (for a specific purpose, blogs, eccomerce and more), we proceed to the development phase ensuring all functionalities are appropriately in place"
    },
    {   
        // icon: 'arrow-repeat',
        icon: 'bug-fill',
        title: 'Testing and Deployment',
        desc: "Having concluded the project, we test the functionalities, we check for any shortcomings and insecurity. We then deploy your website so it can be accessible to all"
    }

]
export const Steps = () => {
    const navigate = useNavigate()
    return(
        <div id='How' className="center w-full flex-col pt-[15vh] overflow-hidden">
            <Parallax id={'howheader'} className={' w-11/12 lg:w-10/12 xl:w-9/12'}>
                <h2 className="text-primary text-2xl mb-5 font-bold tracking-wide text-blue-600">How we get it done for you</h2>
            </Parallax>

            <div className="flex flex-col w-11/12 lg:w-10/12 xl:w-9/12 lg:flex-row gap-[50px] overflow-hidden mt-9">
                
                <div className="flex flex-col w-full">
                    {/* <div className="flex flex-col h-full w-full md:w-10/12"> */}
                    <div className="grid md:grid-cols-2 w-full gap-x-9">
                        {
                            steps.map((step, i) => (
                                <div key={i} className={`flex h-full`}>
                                    <Step step={step} i={i}/>
                                </div>
                            ))
                        }
                        <div className="mt-5"></div>
                        <Button  text={'Get Sterted Now'} icon={'arrow-right'} func={() => navigate('/Contact')}/>
                    </div>
                </div>

            </div>

        </div>
    )
}


const Step = ({step, i}) => {
    return(
        <Parallax id={`steps${step.title[0]}${step.title[2]}${step.title[3]}`} className={'flex gap-2'}>

            <div className={`flex flex-col items-center lg:h-full w-1/12 gap-1`}>
                <p className="border border-blue-900 text-blue-300 h-8 w-8 center rounded-full">{i+1}</p>

                <div className="border-l border-dashed border-blue-900 h-4/5 w-[1px]"></div>
            </div>


            <div className={`flex flex-col w-full gap-3 ${
                i == steps.length - 1 ? 'mb-[2vh]' : 
                i == steps.length - 2 ? 'mb-[5vh] lg:mb-[2vh]' : 
                'mb-[5vh] lg:mb-[10vh] xl:mb-[12vh]'} rounded-2xl border border-blue-900 p-4`}>

                <h3 className="text-blue-600 text-xl">
                    {step.title}
                </h3>
                <p className='text-gray-300 tracking-wide leading-relaxed text-[15px]'>{step.desc}</p>
            </div>
        </Parallax>
    )
}