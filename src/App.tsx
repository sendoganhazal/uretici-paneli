import { Routes, Route } from "react-router-dom";
import Manifacturers from "./pages/Manifacturers";
import Layout from "./Layout";

function App() {

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Manifacturers />} />
        </Route>
      </Routes>
  )
}

export default App
