import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import FindYourOcean from "./components/FindYourOcean";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import Form from "./components/Form";
import FindYourForest from "./components/FindYourForest";
import BeachCard from "./components/BeachCard";
import databeach from "./data/databeach";
import ForestCard from "./components/ForestCard";
import FormJoin from "./components/FormJoin";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/FormJoin" element={<FormJoin />} />
          <Route path="/Beach/:id" element={<BeachCard />} />
          <Route path="/Forest/:id" element={<ForestCard />} />
          <Route path="/Beach" element={<BeachCard beach={databeach[0]} />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Ocean" element={<FindYourOcean />} />
          <Route path="/Forest" element={<FindYourForest />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </HashRouter>{" "}
    </div>
  );
}

export default App;
