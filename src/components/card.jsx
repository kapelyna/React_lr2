import React from "react";
import LeftSide from "./leftSide/leftSide"
import RightSide from "./rightSide/rightSide";

export default function Card(){
    return(
        <div className="flex bg-white min-h-[680px] max-w-[990px] w-full mt-4 rounded-[24px] shadow-md overflow-hidden">
           <LeftSide/>
           <RightSide/>
        </div>
    )
    
}