import Greeter from './Greeter';
import './App.css';
import Die from './Die';
import Listpicker from './Listpicker';
import Clicker from './Clicker';
import Counter from './Counter';
import Toggler from './Toggler';
//props are data passed to a component. they are immutable
//numSides is a prop. prop can be seen js has properties, html has attributes and react has props
function App() {
  return (
    <div>
      <Toggler/>
      <Listpicker values={[1,2,3]}/> {/*This is array being passed */}
      <Clicker/>
      <Counter/>
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
