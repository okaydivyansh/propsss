import Greeter from './Greeter';
import './App.css';
import Die from './Die';

function App() {
  return (
    <div>
      <Greeter person="Divyansh" from="Vellore"/>
      <Die numSides={20}/>  {/*for using number as props we cant use "20" because then it will be string 20*/}
      <Die numSides={6}/>
      <Die numSides={10}/>
    </div>
  );
}

export default App;
