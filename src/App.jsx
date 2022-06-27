import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import FindYourOcean from "./components/ocean/FindYourOcean";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import FindYourForest from "./components/forest/FindYourForest";
import BeachCard from "./components/ocean/BeachCard";
import databeach from "./data/databeach";
import ForestCard from "./components/forest/ForestCard";
import AboutUs from "./components/AboutUs";
import OceanCreateCleaning from "./components/ocean/OceanCreateCleaning";
import OceanJoinEvent from "./components/ocean/OceanJoinEvent";
import ForestCreateEvent from "./components/forest/ForestCreateEvent";
import ForestJoinEvent from "./components/forest/ForestJoinEvent";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Beach/:id" element={<BeachCard />} />
          <Route path="/Forest/:id" element={<ForestCard />} />
          <Route path="/Beach" element={<BeachCard beach={databeach[0]} />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Ocean" element={<FindYourOcean />} />
          <Route path="/Forest" element={<FindYourForest />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/OceanCreateCleaning"
            element={<OceanCreateCleaning />}
          />
          <Route path="/ForestCreateEvent" element={<ForestCreateEvent />} />
          <Route path="/OceanJoinEvent" element={<OceanJoinEvent />} />
          <Route path="/ForestJoinEvent" element={<ForestJoinEvent />} />
        </Routes>
      </HashRouter>{" "}
    </div>
  );
}

export default App;
