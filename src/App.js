import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Contactsupport from './pages/Contactsupport';
import Projects from './pages/Projects';
import To_page from './pages/To_page';
import Login from './pages/Login';
import Addposts from './pages/add/Addposts';
import Dashboard from './pages/dashboard/Dashboard';
import AddTo from './pages/add/AddTo';

const App = () => {
  return(
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/thoughts&opinions" exact element={<To_page />} />
          <Route path="/contactsupport" element={<Contactsupport />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/addposts" element={<Addposts />} />
          <Route path="/addto" element={<AddTo />} />
        </Routes>
  )
}

export default App;
