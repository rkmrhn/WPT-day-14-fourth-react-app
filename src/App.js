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
      {/**for each do not give output its a consumer function*/}
      {list.forEach((item) => item)}
      {/**it will give us input and output both */}
      {list.map((item) => item)}
    </>
  );
}

export default App;
