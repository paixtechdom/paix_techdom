import { Parallax } from '../../Components/Parallax'
import { ServicesInfo } from '../../assets/Constants'
import { GridSlider } from '../Components/GridSlider'


export const ServiceList = () => {
    return(
        <section id='servicelist' className="center flex-col pt-[9ch]">
            <div className="w-11/12 lg:10/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-2">
                <Parallax id={'serviced'}>
                    <div className="text-blue-600 text-3xl">Our Services</div>
                </Parallax>
                    
            </div>     
            <GridSlider data={ServicesInfo}/>
        </section>
    )
}