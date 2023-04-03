import logo from './logo.svg';
import './App.css';
import { translate } from './utils/translate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {translate("Hello")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_DOMAIN}
        </a>
      </header>
    </div>
  );
}

export default App;
