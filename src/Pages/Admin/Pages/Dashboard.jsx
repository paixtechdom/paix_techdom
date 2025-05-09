import { Link } from "react-router-dom"
import { DataCard } from "../../../Components/DataCard"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import Logo from "/images.jpeg"
// import { OrdersTable } from "../../Components/Table/Tables"


const Dashboard = () => {



    return(
        <main className="flex w-full min-h-screen center pt-[20vh] bg-gray-100">
            <div className="w-[95%] flex flex-col gap-5 min-h-screen">
                {/* <BreadCrumbs currentLocation={'Dashboard'} 
                links={['Home', 'Dashboard']}/> */}


                {/* ******** STASTICS ************* */}
                <div className="flex flex-col gap-9">
                    <div className="flex flex-col w-full ">

                        <div className="grid grid-cols-2 lg:grid-cols-4 w-full  gap-5 bg-red-3 00">
                            <DataCard className={'bg-blue-200'} data={'Total Exams'} icon={'people-fill'} id={'topmerchant'} value={'23'}/>
                            
                            <DataCard className={'bg-blue-100'} data={'Students'} iconClass={'bg-green-600'} icon={'cart-fill'} id={'topmerchant'} value={'+120'}/>

                            <DataCard className={'bg-blue-50'}  data={'Average Scores'} icon={'card-checklist'} id={'topProduct'} value={'10'}/>

                            <DataCard iconClass={'bg-red-800'} data={'Modules'} icon={'exclamation-triangle'} id={'topProduct'} value={'10'}/>
                        </div>


                        

                        <div className="flex flex-col mt-[5ch] text-gray-900 gap-5">
                            <div className="flex gap-9 items-end text-xl text-primary">
                                <div className="">Recent Activities</div>

                                <Link to={'/orders'} className="text-secondary scale-90 uppercase">
                                    See All <i className="bi bi-chevron-right"></i>
                                </Link>
                            </div>

                            {/* <OrdersTable data={filteredrecentorder} currentPage={1}/> */}
                            
                        </div>



                    </div>




                </div>

            </div>
        </main>
    )
}



export default Dashboard 