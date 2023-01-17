import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import articleReducer from "./articles/articleReducer";



const reducer = combineReducers ({
  articleReducer
})

const store = configureStore({
reducer, 
applyMiddleware

})

  export default store; 