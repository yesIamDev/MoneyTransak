import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Clients from "./components/clients/Clients";
import Depots from "./components/depots/Depots";
import Retraits from "./components/retraits/Retraits";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/depots" element={<Depots />} />
          <Route path="/retraits" element={<Retraits />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
