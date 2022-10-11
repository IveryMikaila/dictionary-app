import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Open  
            <a className="sourceCode" href="https://github.com/IveryMikaila/dictionary-app"> Source Code </a> by Mikaila Ivery ♡</small>
        </footer>
      </div>
    </div>
  );
}