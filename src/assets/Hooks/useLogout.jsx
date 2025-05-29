import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import Cookie from "js-cookie"


export const useLogout = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate()

    const Logout = (goTo) => {
        // console.log("log out")
        navigate(`/${goTo}`)
        Cookie.remove('userDetails', {path:'/'})
        Cookie.remove('examDetails', {path:'/'})
    
        // set all states

    }
  
  
    return Logout; // Return the function so it can be used in components
  };