import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import ServiceAnalytics from "./pages/Analytics/ServicesA"
import Sales from "./pages/Analytics/Sales"
import ServicesManagement from "./pages/Management/OrderManage"
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
          <Route path="/manager">
            <Route index element={<Navigate to='/manager/services' />} />
            <Route path="services" element={<ServicesManagement />} />
          </Route>
          <Route path="/analytics">
            <Route index element={<Navigate to='/analytics/services' />} />
            <Route path="services" element={<ServiceAnalytics />} />
            <Route path="sales" element={<Sales />} />
          </Route>
        </Routes >
      </BrowserRouter>
    </>
  )
}
export default App
