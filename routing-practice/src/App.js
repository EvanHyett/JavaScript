import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Color from './components/Color';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />}/>
        <Route path="/:word" element={<Word />}/>
        <Route path="/:word/:color/:background" element={<Color />}/>
      </Routes>
    </div>
  );
}

export default App;
