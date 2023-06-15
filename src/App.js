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
    inputRef.current.value = "";
  };
  return (
    <>
      <input type="text" ref={inputRef} placeholder="Enter user Input" />
      <input type="button" value="add" onClick={AddItemAction} />
      {list.map((item) => (
        <div>
          <h4>{item}</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rerum
            dicta architecto excepturi voluptatem necessitatibus perspiciatis
            suscipit deserunt. Odit, at.
          </p>
          <input type="button" value="&#128077;" />
          <input type="button" value="&#128078;" />
        </div>
      ))}
    </>
  );
}

export default App;
