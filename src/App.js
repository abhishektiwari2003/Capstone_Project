import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import About from "./components/About/about";
import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";

// import Register from "./components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Startup } from "./components/Startup/Startup";
import { NewStartup } from "./components/Startup/NewStartup";

function App() {
  // const { loginWithRedirect } = useAuth0();
  return (
    <div>
      {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
      <Nav />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                <div className="App">
                  {" "}
                  <Slider />{" "}
                </div>{" "}
                <Home />{" "}
              </div>
            }
          />
          <Route path="/startups" element={<Startup />} />
          <Route path="/AddNewStartup" element={<NewStartup />} />
          <Route path="/about" element={<About />} />
        </Routes>
         {/* About route */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
