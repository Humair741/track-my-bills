import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Upload from "./pages/Upload"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App
