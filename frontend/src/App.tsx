import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import Statistics from "./pages/Statistics"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/statistics" element={<Statistics/>}/>
        </Routes >
      </BrowserRouter>
    </>
  )
}
export default App
