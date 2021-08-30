import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";
//import  Netflix from "./Netflix";
//import Amazon from "./Amazon";
import "./index.css";
//const  favSeries ="amazon";
//const FavS =()=>{
  //if(favSeries==="netflix"){
  //return <Netflix/>;
  //}else{
  //return <Amazon />;
 // }
//};
const  App =()=>(
  
  <>
  <h1 className="heading_style">List of top 5 Netflix series</h1>
  {/*<FavS/>*/}
 {/* {favSeries === "netflix" ? <Netflix/>:<Amazon/>}*/}
 {Sdata.map((val)=>{
  return(

<Cards
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}

  />
  );
  } ) }
  </>
  );

export default App;