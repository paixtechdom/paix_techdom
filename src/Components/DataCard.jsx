
export const DataCard = ({className, data, icon, id, value, iconClass}) => {

    return(
        <div className={`w-full h-fit cursor-pointer transition-all duration-1000 hover:scale-90 ${className ? className : 'bg-white'} flex flex-col items-center p-5 shadow-lg lg:shadow-xl rounded-xl`}>

            <div className="w-full flex justify-between items-center">
                <p className="text-lg text-gray-800 ">{data}</p> 
                <i className={`bi bi-${icon} bg-gray-900 scale-[0.7] h-14 w-14 shadow rounded-full center text-white text-2xl`}></i>

            </div>
            <div className="w-full">
                <p className="text-3xl text-secondary">{value}</p>

            </div>


            <div className="flex items-end gap-2  font -bold">
            </div>

                
   
        </div>
    )
}

