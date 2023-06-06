
import './App.css';
// import Person from './person';
import Counter from './counter';
function App() {
  return (
    <div className="App">
    
      <Counter name={"Charvi"} age={7} hairColor={"Black"}/>
      <Counter  name={"Shilagha"} age={28} hairColor={"Black"} />
      <Counter name={"Sahil"} age={30} hairColor={"Black"}/>
     
    </div>
  );
}

export default App;
