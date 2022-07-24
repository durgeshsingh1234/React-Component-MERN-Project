import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup'
import Login from './components/Login'
import Addcode from './components/Addcode'
import Browse from './components/Browse'

function App() {

 
  
  return (
    

    <BrowserRouter>
    <Navbar></Navbar>
       <Routes>
       <Route element={<Signup></Signup>}path="/signup"/>
       <Route element={<Login></Login>}path="/login"/>
       <Route element={<Addcode></Addcode>}path="/addcode"/>
       <Route element={<Browse></Browse>}path="/browse"/>

       </Routes>
    </BrowserRouter>    
  );
}

export default App;
