import { useEffect, useState, createContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ErrorPage from "./pages/errorPage";


export const darkModeContext = createContext();

function App() {

  const [isDarkModeState, setDarkModeState] = useState(false);

/*  useEffect(() => {
    const fetchEvents = async () => {
      setLoadingData(true);
      /!*
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      *!/

      /!* setEventData(events); *!/
      setEventData(fireData);
      setLoadingData(false);
    };

    fetchEvents();
  }, []);*/

  return (
      <Router>
          <darkModeContext.Provider
              value={{
                  isDarkModeState,
                  setDarkModeState,
              }}
          >
          <Header />
          <Routes>
              <Route path="DAT257/" element={<Home/>} />
              <Route path="DAT257/aboutus" element={<AboutUs/>} />
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          </darkModeContext.Provider>
          <Footer />
      </Router>
  );
}

export default App;
