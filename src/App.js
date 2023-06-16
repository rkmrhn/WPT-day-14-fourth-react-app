import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Todo</h1>
      <Inputbox />
    </>
  );
}
function Inputbox() {
  let [todo, setTodo] = useState({ task: "" });
  let handdleTheChange = (e) => {
    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };
  let addTodoAction = () => {
    alert(todo.task);
  };

  return (
    <>
      <input
        type="text"
        value={todo.task}
        placeholder="Enter user input.."
        onChange={handdleTheChange}
      />
      <input type="button" value="add Todo" onClick={addTodoAction} />
    </>
  );
}

export default App;
