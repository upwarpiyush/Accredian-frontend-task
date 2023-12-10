import {Routes, Route} from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="App" style={{width: '100%', height: '100%'}}>
      <NavBar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
