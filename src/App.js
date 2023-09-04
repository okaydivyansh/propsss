import Greeter from './Greeter';
import './App.css';
import Die from './Die';
//numSides is a prop. prop can be seen js has properties, html has attributes and react has props
function App() {
  return (
    <div>
      <Greeter person="Divyansh" from="Vellore"/>
      <Greeter person="Adrija" from="Mumbai"/>
      <Die numSides={20}/>  {/*for using number as props we cant use "20" because then it will be string 20*/}
      <Die numSides={6}/> 
      <Die/> {/*i didnt mention prop so default value would be taken*/ }
      <Die numSides={10}/>
    </div>
  );
}

export default App;
