import logo from './logo.svg';
import './App.css';
import { ClockFun } from './components/clockFun';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ClockFun/>
      </header>
    </div>
  );
}

export default App;
