//for learning state. lecture 633
import "./Toggler.css"
import { useState } from "react";
export default function Toggler(){
    const [isHappy,setIsHappy]=useState(true);
    const toggleIsHappy=() =>setIsHappy(!isHappy);
    return(
        <div> Click on this: 
        <p onClick={toggleIsHappy}>
            {isHappy?":)":":("}
        </p>
        </div>
    );
}