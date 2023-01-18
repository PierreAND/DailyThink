import {applyMiddleware, combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import sportReducer from "./articles/sportReducer"


const reducer = combineReducers ({
  sportReducer
})

const store = configureStore({
reducer, 
applyMiddleware

})

  export default store; 