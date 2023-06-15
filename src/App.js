import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <MessageDemo name="rohan" email="rohan@gmail.com"  />
      <MessageDemo name="pankaj" email="pankaj@gmail.com" />
      <MessageDemo name="shubham" email="shubham@gmail.com" />
    </>
  );
}
function MessageDemo({name,email}){
  return(
    <>
    <h1>hello {name} {email}</h1>
    </>
  )
}

export default App;
