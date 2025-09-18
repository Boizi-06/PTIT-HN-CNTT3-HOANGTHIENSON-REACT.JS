import { useState } from "react";




export default function Bai1() {
    const [Fullname,Setfullname] = useState("Hoang Thien Son");
   const Handleclick = () => {
    Setfullname("boizi"); 
  };
  return (
    <div>
        <p>Ho va Ten : {Fullname}</p>
        <button onClick={Handleclick}>Click me</button>
    </div>
  )
}