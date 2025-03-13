import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { HomePage } from "./Components/Homepage/Homepage";
import { Createdetails } from "./Components/Createdetails/Createdetails";
import { Updatedetails } from "./Components/Updatedetails/Updatedetails";
import { Checkdetails } from "./Components/Checkdetails/Checkdetails";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/Createdetails" element={<Createdetails/>}/>
          <Route path="/Updatedetails" element={<Updatedetails/>}/>
          <Route path="/Checkdetails" element={<Checkdetails/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
