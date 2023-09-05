//react states. lecture 631
//used in:
//1.data fetched from an API
//2.form information
//3.Ask yourself: "Will this ever change?". If yes, it should go in state

//Following piece of code is written in a hope that on clicking the button, num would increase but it wont as we need state for it
//though the value is incrementing in the console but it is not rendered

// export default function Counter(){
//     let num=0;
//     const incrementNum=()=>(num+=1);
//     return (
//         <div>
//             <p>The count is: {num}</p>
//             <button onClick={incrementNum}>Increment</button>
//         </div>
//     );
// }


//useState is a hook. we add it to add a state variable into a component
// const [num,setNum]. num is the variable and setNum is the func used to change the state value
import { useState } from "react";
export default function Counter(){
    const [num,setNum]=useState(0);   {/*0 means starts with 0 */}
    const changeNum=()=>{
        setNum(num+1);  {/*if we use setNum(5) or any constant then after clicking,value becomes that constant */}
    };
    return(
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}

