const INITIAL_STATE = {
  articles: []
}

function actuReducer(state= INITIAL_STATE, action){

  switch(action.type){
    case "ADDACTU" : {
      const newArt = [...state.articles];
      newArt.unshift(action.payload);
      return {
        articles: newArt
      }

      }
    
    case "LOADACTU" : {
      return{
        ...state,
        articles: action.payload
      }
    }
  }

return state;

}
export default actuReducer;