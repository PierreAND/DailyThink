import axios from "axios";




const APIRequest = axios.create ({ baseURL: "http://localhost:3000" })


APIRequest.interceptors.request.use(({headers, ...config}) => ({
  ...config,
  headers: {
    ...headers, 
    
    "Content-type": "application/json",
  },
}));

export default class APIManager {

static async getAllSport() {
  
const response = await APIRequest.get("/sports");
return response.data;
} 



static async newSport(payload) {
    
    const response = await APIRequest.post("/sports", payload);
    return response; 
    } 
  

static async getAllMusique() {
  
const response = await APIRequest.get("/musiques");
return response.data;
} 



static async newMusique(payload) {
    
    const response = await APIRequest.post("/musiques", payload);
    return response; 
    } 
  
static async getAllActu() {
  
const response = await APIRequest.get("/actus");
return response.data;
} 



static async newActu(payload) {
    
    const response = await APIRequest.post("/actus", payload);
    return response; 
    } 
  
static async getAllPhilo() {
  
const response = await APIRequest.get("/philos");
return response.data;
} 



static async newPhilo(payload) {
    
    const response = await APIRequest.post("/philos", payload);
    return response; 
    } 
  
static async getAllCinema() {
  
const response = await APIRequest.get("/cinemas");
return response.data;
} 



static async newCinema(payload) {
    
    const response = await APIRequest.post("/cinemas", payload);
    return response; 
    } 
  
  }