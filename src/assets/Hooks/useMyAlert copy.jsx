import { useDispatch } from "react-redux";
import { setAlertMessage, setAlertType, toggleShowAlert } from "../store/AlertSlice";

export const useUpdateExamDetails = () => {
    const dispatch = useDispatch();
  
    // Create a function that handles the alert logic
    const triggerAlert = (alertType, alertMessage) => {
      dispatch(setAlertType(alertType));
      dispatch(setAlertMessage(alertMessage));
      dispatch(toggleShowAlert(true));
    };
  
    return triggerAlert; // Return the function so it can be used in components
  };