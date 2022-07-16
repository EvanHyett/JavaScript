import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Info from './components/Info';
import Obiwan from './components/Obiwan';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Routes>
        <Route path="/:category/:id" element={<Info></Info>} />
        <Route path="/obiwan" element={<Obiwan></Obiwan>} />
      </Routes>
    </div>
  );
}

export default App;
