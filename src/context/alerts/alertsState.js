// 2 
import { useReducer } from "react";
import AlertsContext from "./alertsContext";
import AlertsReducer from "./alertsReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// 3 
const AlertsState  = (props) => {
  //4 
  const initialState = null
  const [state, dispatch] = useReducer(AlertsReducer, initialState)
  //5
  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type
      }
    })
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT })
    }, 5000)
  }
  return (
    <AlertsContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  )
}

export default AlertsState 
