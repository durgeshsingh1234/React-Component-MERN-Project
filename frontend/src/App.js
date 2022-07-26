import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup'
import Login from './components/Login'
import Addcode from './components/Addcode'
import Browse from './components/Browse'
import Viewer from './components/Viewer'
import Forgetpassword from './components/Forgetpassword'
import Authorisor from './components/Auth';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
       <Routes>
       <Route element={<Signup></Signup>}path="/signup"/>
       <Route element={<Login></Login>}path="/login"/>
       <Route element={
        <Authorisor>
          <Addcode />
        </Authorisor>
       }path="/addcode"/>
       <Route element={<Browse></Browse>}path="/browse"/>
       <Route element={<Viewer></Viewer>}path="/viewer/:id"/>
       <Route element={<Forgetpassword></Forgetpassword>}path="/Forgetpassword"/>
      
       </Routes>
    </BrowserRouter>    
  );
}

export default App;
