import { useState } from "react";

function App() {
  return (
    <>
      <h1>demo</h1>
      <ListDemo />
    </>
  );
}
// by clicking on a button we can add a statement
function ListDemo() {
  let data = "hello";
  let [list, setList] = useState(["Delhi"]);

  let AddnewItem=()=>{
    let newList=[...list ,"Mumbai"];
    setList(newList);
  }

  return (
    <>
      <h1>{data}</h1>
      <input type="button" value="add New" onClick={AddnewItem}/>

      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;
