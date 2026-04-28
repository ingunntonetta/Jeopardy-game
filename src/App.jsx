import "./App.css";
import Board from './components/Board';

function App() {
  return (
      <div className="game-screen">
          <h1 className="game-title">🎯 Jeopardy</h1>
          <Board />
      </div>
  );
}

export default App;
