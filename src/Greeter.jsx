export default function Greeter(props){
    return <h1>Hi there! {props.person} from {props.from}</h1>  //person ki value we are getting from App.js
}

/* there is another way of using props where we degenerate the props by 
export default function Greeter({person,from}) {
    return (
        <h1> Hi there, {person} from {from} !!</h1>
    )
}
*/