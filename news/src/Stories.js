import React, { useEffect } from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
  const {hits,nbPages,isloading}= useGlobalContext();

  // let isloading = true;



if(isloading){
    return(
      <>
        <h1>Loading....</h1>
      </>
    )
  }


  return (
    <>



      <h2>hello</h2>
      {hits.map((curPost)=>{
        const {title,author,objectID,url,num_comments }= curPost;
        return (
          <>
          <div className='card'>
    <h2>{title}</h2>
    <p>BY<span>{author}</span>|<span>{num_comments}</span> comments</p>

    </div>
    <div className='card-button'>
      <a href='{url}' target="_black">Read more</a>
      <a href="#">Remove</a>
    </div>
    </>

        );
      })}
    </>
  )
}

export default Stories
