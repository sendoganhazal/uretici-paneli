import { Routes, Route } from "react-router-dom";
import Manifacturers from "./pages/Manifacturers";
import ManufacturerDetail from "./pages/manufacturer/[id]/page";
import Layout from "./Layout";
import RequestContainer from "./components/organisms/RequestContainer";
function App() {

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Manifacturers />} />
           <Route path="/manufacturer/:id" element={<ManufacturerDetail/>}/>
           <Route path="/request" element={<RequestContainer/>}/>
        </Route>
      </Routes>
  )
}

export default App
