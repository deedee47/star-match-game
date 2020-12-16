import { useState } from 'react';
import '../styles/App.css';
import StarMatch from './StarMatch';

function App() {
	const [gameId, setGameId] = useState(1);
	const startNewGame = () => setGameId(gameId + 1);
	return (
		<div>
			<StarMatch key={gameId} startNewGame={startNewGame} />
		</div>

		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
