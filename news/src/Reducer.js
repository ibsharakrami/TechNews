

const reducer =(state,action)=>{
 switch(action.type){

  case "GET_LOADING":
    return {
      ...state,
      isloading:true,


   };

  case "GET_STORIES" :
    return{
      ...state,
      isloading:false,
      hits:action.payload.hits,
      nbpages:action.payload.nbPages,

    };



 }


  return state;
};
export default reducer;
