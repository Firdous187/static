import logo from './logo.svg';
import './App.css';
import SSCStudent from './classes/SSCStudent';

function App() {
 
  let haya = new SSCStudent();
  haya.engMarks =99;
  

  console.log(SSCStudent.passMarks);
  SSCStudent.aboutTenth();

  let firdous = new SSCStudent("Firdous, 22, {firdous.gender}");
  let niha = new SSCStudent("Niharika,22");
  let ravi = new SSCStudent("Ravi,23");
  let prasad = new SSCStudent("Prasad,23");
  let harsha = new SSCStudent("Harsha,23");
 

  firdous.calculateResult();
  firdous.gender= "Female";
  console.log(firdous.gender);  
  
  


  return




}

export default App;
