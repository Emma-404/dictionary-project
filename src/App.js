import logo from "./logosmall.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Code with 🩶 by Emma-404 and is open-source
        </footer>
      </div>
    </div>
  );
}

export default App;
