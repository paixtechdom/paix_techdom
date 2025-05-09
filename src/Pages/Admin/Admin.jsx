import { useContext, useState } from "react"
import { AppContext } from "../../App"
import Dashboard from "./Pages/Dashboard"
// import "./Admin.css"

export const Admin = () =>{
    const {  userName  } = useContext(AppContext)


    if(userName == 'admin' ){
        return (
            <main className="admin">
                <Dashboard />
            </main>
        )

    }
 
}