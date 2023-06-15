import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Demo</h1>
      <AddItem />
    </>
  );
}
function AddItem() {
  let inputRef = useRef();
  let [list, setList] = useState(["Hey"]);

  let AddItemAction = () => {
    let inputItem = inputRef.current.value;
    let newlist = [...list, inputItem];
    setList(newlist);
    inputRef.current.value="";
  };
  return (
    <>
      <input type="text" ref={inputRef} placeholder="Enter User inout..." />
      <input type="button" value="add" onClick={AddItemAction} />
      {list.map((item) => (
        <h3>{item}</h3>
      ))}
    </>
  );
}

export default App;
