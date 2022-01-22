import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Contactsupport from './pages/Contactsupport';

const App = () => {
  return(
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contactsupport" element={<Contactsupport />} />
        </Routes>
  )
}

export default App;
