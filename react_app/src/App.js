import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ErrorPage from "./pages/errorPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export const darkModeContext = createContext();
export const leaderboardContext = createContext();

function App() {
  const [isDarkModeState, setDarkModeState] = useState(false);
  const [leaderboardShown, setLeaderboardShown] = useState(false);

  //Content in this file has been moved to Home.js in pages folder!!!
  return (
    <div className="App">
      <Router>
        <darkModeContext.Provider
          value={{
            isDarkModeState,
            setDarkModeState,
          }}
        >
          <leaderboardContext.Provider
            value={{
              leaderboardShown,
              setLeaderboardShown,
            }}
          >
            <Header />
            <Routes>
              <Route path="DAT257/" element={<Home />} />
              <Route path="DAT257/aboutus" element={<AboutUs />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </leaderboardContext.Provider>
        </darkModeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
