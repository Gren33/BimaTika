import { Route, Routes } from "react-router-dom";
import "./App.css";

import User from "./components/User";
import Merchant from "./components/Merchant";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route index element={<Layout />} />
          <Route path="user" element={<User />} />
          <Route path="merchant" element={<Merchant />} />
        </Route>
      </Routes>
      {/* <Layout /> */}
    </div>
  );
}

export default App;
