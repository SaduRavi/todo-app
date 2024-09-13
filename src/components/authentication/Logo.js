import React from "react";
import pencil from "./../../assets/pencil.png";
export default function Logo() {
  return (
    <div style={{ display: "flex", flexDirection: "row" , alignItems:'center', padding:'10px 20px'}}>
      <img src={pencil} width={50} style={{transform:'rotate(40deg)'}}/>
      <h1 style={{fontFamily:'sans-serif', color:'#8789FF'}}> Todo App </h1>
    </div>
  );
}
