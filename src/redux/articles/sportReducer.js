const INITIAL_STATE = {
  articles: []
}

function sportReducer(state= INITIAL_STATE, action){

  switch(action.type){
    case "ADDSPORT" : {
      const newArt = [...state.articles];
      newArt.unshift(action.payload);
      return {
        articles: newArt
      }

      }
    
    case "LOADSPORT" : {
      return{
        ...state,
        articles: action.payload
      }
    }
  }

return state;

}
export default sportReducer;