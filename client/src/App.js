import './App.css';
import Header from "./components/Header"
import Sidebar from './components/Sidebar';
import FileIcons from './components/Files/FileIcons';
import Features from './components/Tabs/Features';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<FileIcons />}/>
            <Route path="/features" element={<Features />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
