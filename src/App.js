import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const name = "Brad";
  const x = true;
  return (
    // Have to return single element
    <div className="container">
      {/* <h1>Hello word {name}</h1>
      <h2>Hello {x ? "yes" : "No"}</h2> */}
      <Header title="name" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
