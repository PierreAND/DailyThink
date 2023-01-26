const INITIAL_STATE = {
  articles: []
}

function philoReducer(state= INITIAL_STATE, action){

  switch(action.type){
    case "ADDPHILO" : {
      const newArt = [...state.articles];
      newArt.unshift(action.payload);
      return {
        articles: newArt
      }

      }
    
    case "LOADPHILO" : {
      return{
        ...state,
        articles: action.payload
      }
    }
  }

return state;

}
export default philoReducer;