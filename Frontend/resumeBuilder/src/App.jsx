import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import { About } from "./Pages/About"
import { CreateResume } from "./Pages/CreateResume"
import { Profile } from "./Pages/Profile"
import { NotFound } from "./Pages/NotFound"

function App() {


  return (
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/createResume" element={<CreateResume/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
     </Router>
  )
}

export default App
