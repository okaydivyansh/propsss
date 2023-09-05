//react events lecture 627

function handleclick(){
    alert("Button was clicked")
}
export default function Clicker(){
    return (<div>
        <p>Click on the button!</p>
        <button onClick={handleclick}>Click me</button>
    </div>);
}