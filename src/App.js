import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './components/PhoneBar/PhoneBar';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <h1 className='text-6xl font-bold underline'>This is a big big Header</h1>
     <p>Lorem ipsum dolor sit amet</p>
    <Pricing></Pricing>
    <AssignmentMarks></AssignmentMarks>
    <PhoneBar></PhoneBar>
    </div>
    
  );
}

export default App;
