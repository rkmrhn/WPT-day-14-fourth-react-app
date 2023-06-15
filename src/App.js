import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <MessageDemo name="rohan"  />
      <MessageDemo name="pankaj" />
      <MessageDemo name="shubham" />
    </>
  );
}
function MessageDemo(props){
//props will behave like an object
  return(
    <>
    <h1>hello {props.name}</h1>
    </>
  )
}

export default App;
