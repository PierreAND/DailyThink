const INITIAL_STATE = {
  articles: []
}

function cinemaReducer (state= INITIAL_STATE, action){

  switch(action.type){
    case "ADDCINEMA" : {
      const newArt = [...state.articles];
      newArt.unshift(action.payload);
      return {
        articles: newArt
      }

      }
    
    case "LOADCINEMA" : {
      return{
        ...state,
        articles: action.payload
      }
    }
  }

return state;

}
export default cinemaReducer ;