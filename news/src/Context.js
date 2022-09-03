import React, { useContext, useReducer ,useEffect} from "react";
import reducer from "./Reducer";

let API ="http://hn.algolia.com/api/v1/search?";

const initialState ={
  isloading :true,
  query:"CSS",
  nbPages:0,
  page:0,
  hits:[],
}

const AppContext = React.createContext();

const AppProvider =({children})=>{

  const [state,dispatch]= useReducer(reducer ,initialState);



  const fetchApiData= async(url)=>{
    dispatch({type:"GET_LOADING"});

    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type:"GET_STORIES",
        payload:{
          hits: data.hits,
          nbPages: data.nbPages,
        },
      })

    }catch(error){
      console.log(error);
    }

  };


  useEffect(()=>{
    fetchApiData(`${API}query=${state.query}&page=${state.page} `);

  },[])


  return <AppContext.Provider value={{...state}}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext =()=>{
  return useContext(AppContext);
}

export {AppContext, AppProvider,useGlobalContext};
