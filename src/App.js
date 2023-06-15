function App() {
  return (
    <>
      <h1>Loop list</h1>
      <TestLoop />
    </>
  );
}
function TestLoop() {
  //stateless
  let list = ["delhi", "mumbai", "kolkata", "lucknow"];
  // stateful:
  // let [list, setList] = ["delhi", "mumbai", "kolkata", "lucknow"];

  return (
    <>
      <h1>data</h1>
      {list.map((item) => item)}
    </>
  );
}

export default App;
