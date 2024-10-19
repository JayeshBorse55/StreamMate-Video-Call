import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './App.css'
import LandingPage from "./pages/landing";
import Authentication from "./pages/Authentication";
import { AuthProvider } from "./contents/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";
import HomeComponent from "./pages/home";
import History from "./pages/history";

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/auth" element={<Authentication/>}/>
              <Route path="/home" element={<HomeComponent/>}/>
              <Route path="/history" element={<History/>}/>   
              <Route path="/:url" element={<VideoMeetComponent/>}/>        
            </Routes>
          </AuthProvider>
      </Router>
    </>
  )
}

export default App
