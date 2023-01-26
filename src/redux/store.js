import {applyMiddleware, combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import sportReducer from "./articles/sportReducer"
import cinemaReducer from "./articles/cinemaReducer"
import musiqueReducer from "./articles/musiqueReducer"
import philoReducer from "./articles/philoReducer"
import actuReducer from "./articles/actuReducer"


const reducer = combineReducers ({
  sportReducer, cinemaReducer, musiqueReducer, philoReducer, actuReducer
})

const store = configureStore({
reducer, 
applyMiddleware

})

  export default store; 