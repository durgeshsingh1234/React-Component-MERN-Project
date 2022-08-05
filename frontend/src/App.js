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
import Authorisor from './components/Auth'
import { useMediaQuery } from 'react-responsive'
import Home from './components/Home';


function App() {

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <BrowserRouter>
    <Navbar></Navbar>
       <Routes>
       <Route element={<Home />}path="/"/>
       <Route element={<Signup></Signup>}path="/signup"/>
       <Route element={<Login></Login>}path="/login"/>
       <Route element={<Authorisor>
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
