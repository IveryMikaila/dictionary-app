import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
Mikaila's Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Mikaila</small>
        </footer>
      </div>
    </div>
  );
}
