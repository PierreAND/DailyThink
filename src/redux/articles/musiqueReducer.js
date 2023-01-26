const INITIAL_STATE = {
  articles: []
}

function musiqueReducer (state= INITIAL_STATE, action){

  switch(action.type){
    case "ADDMUSIQUE" : {
      const newArt = [...state.articles];
      newArt.unshift(action.payload);
      return {
        articles: newArt
      }

      }
    
    case "LOADMUSIQUE" : {
      return{
        ...state,
        articles: action.payload
      }
    }
  }

return state;

}
export default musiqueReducer ;