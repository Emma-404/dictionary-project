import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          Coded with 🩶 by{" "}
          <a href="https://github.com/Emma-404" target="_blank">
            Emma-404
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Emma-404/dictionary-project"
            target="_blank"
          >
            open-source
          </a>
        </footer>
      </div>
    </div>
  );
}
