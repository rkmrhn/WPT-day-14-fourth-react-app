import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>todo</h1>
      <MultipleInput />
    </>
  );
}
function MultipleInput() {
  let inputref = useRef();
  let [todo, setTodo] = useState({ task: "", discription: "" });

  let handleChangeTaskAction = (e) => {
    let newtodo = { ...todo, task: e.target.value };
    setTodo(newtodo);
  };
  let handleChangeDiscriptionAction = (e) => {
    let newtodo = { ...todo, discription: e.target.value };
    setTodo(newtodo);
  };
  let addItemAction = () => {
    console.log(todo);
  };
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter todo..."
        ref={inputref}
        value={todo.task}
        onChange={handleChangeTaskAction}
      />
      <textarea
        className="form-control"
        name=""
        id=""
        cols="30"
        rows="3"
        placeholder="Enter Description"
        ref={inputref}
        value={todo.discription}
        onChange={handleChangeDiscriptionAction}
      ></textarea>
      <input type="button" value="add todo" onClick={addItemAction} />
    </>
  );
}

export default App;
