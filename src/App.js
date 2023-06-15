function App() {
  return (
    <>
      <h1>demo</h1>
      <ListDemo />
    </>
  );
}
// objective is to print a sentence n number of times
function ListDemo() {
  let data = "hello world";
  let list = ["delhi", "mumbai", "kolkata", "lucknow"];
  let list1 = [];
  for (let i = 0; i < 100; i++) {
    list1.push("");
  }
  return (
    <>
      <h1>{data}</h1>
      {/**print hello world 4 times */}
      <h1>
        {list.map((item) => (
          <div>{data}</div>
        ))}
      </h1>

      {/**print hello universe 100 times */}
      <h1>
        {" "}
        {list1.map((item) => (
          <div>hello universe</div>
        ))}
      </h1>
    </>
  );
}

export default App;
