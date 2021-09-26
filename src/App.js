import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://storageapi.fleek.co/fleek-team-bucket/site/fleek-logo.png" width="15%" height="15%"/>
        +
        <img src="https://th.bing.com/th/id/OIP.qzOPXbtKJb7bzQN5Q7HxFAHaFP?pid=ImgDet&rs=1" width="10%" height="10%"/>
        +
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
      </header>
    </div>
  );
}

export default App;
