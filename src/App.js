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
  let [successBox, setSuccessbox] = useState(false);
  let [todo, setTodo] = useState({ task: "", discription: "" });

  let handleChangeTaskAction = (e) => {
    let newtodo = { ...todo, task: e.target.value };
    setTodo(newtodo);
  };
  let handleChangeDiscriptionAction = (e) => {
    let newtodo = { ...todo, discription: e.target.value };
    setTodo(newtodo);
  };
  let addItemAction = async () => {
    console.log(todo);

    let url = `http://localhost:4000/addTodo?task=${todo.task}&discription=${todo.discription}`;
    await fetch(url);
    //clear the box after adding
    let newtodo = { task: "", discription: "" };
    setTodo(newtodo);
    setSuccessbox(true);
    //after 4000 miliseconds successBox will become again false
    setTimeout(() => {
      setSuccessbox(false);
    }, 4000);
  };
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Enter todo..."
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
        value={todo.discription}
        onChange={handleChangeDiscriptionAction}
      ></textarea>
      <input type="button" value="add todo" onClick={addItemAction} />
      {successBox && (
        <div className="alert alert-success">operation success</div>
      )}
    </>
  );
}

export default App;
