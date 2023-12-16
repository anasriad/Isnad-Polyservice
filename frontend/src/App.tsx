import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/SignUp"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import ServiceAnalytics from "./pages/Analytics/ServicesA"
import Sales from "./pages/Analytics/Sales"
import ServicesManagement from "./pages/Management/OrderManage"
import { AuthProvider, useAuth } from "../src/components/AuthContext";
interface ProtectedRouteProps {
  element: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { authenticated } = useAuth();

  return authenticated ? (
    <>{element}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/services" element={<ProtectedRoute element={<Services/>} />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route
              path="/manager"
              element={<ProtectedRoute element={<Navigate to="/manager/services" />} />}
            >
              <Route path="services" element={<ServicesManagement />} />
            </Route>

            <Route
              path="/analytics"
              element={<ProtectedRoute element={<Navigate to="/analytics/services" />} />}
            >
              <Route path="services" element={<ServiceAnalytics />} />
              <Route path="sales" element={<Sales />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}
export default App
