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
  let [list, setList] = useState([""]);

  let addItemAction = () => {
    let itemref = document.querySelector("#id1");
    let inputItem = itemref.value;
    let newlist = [...list, inputItem];
    setList(newlist);
    itemref.value="";
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Enter..." id="id1" />
      </div>
      <div>
        <input type="button" value="add" onClick={addItemAction} />
      </div>
      {list.map((item)=>(
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
