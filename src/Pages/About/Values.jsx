import { ValuesInfo } from '../../assets/Constants'


export const Values = () => {
    return(
        <div className="center mt-[9ch]">
            <div className="w-11/12 lg:10/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {
                    ValuesInfo.map((value, i) => (
                        <div className="flex flex-col">

                        </div>
                    ))
                }    
            </div>           
        </div>
    )
}