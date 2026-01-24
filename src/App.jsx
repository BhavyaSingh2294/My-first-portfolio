import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import {Toaster} from "@/components/ui/toaster.jsx"

function App() {
  
  return (
    <>
     <Toaster/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
    </>
  )
}

export default App
