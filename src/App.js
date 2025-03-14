import React from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./footer";
import WhatsappIcon from "./whatsappicon";
import Login from "./auth/login";
import Register from "./auth/signup";
import Parts from "./parts"; // Import Parts component

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

const isAuthenticated = () => {
  return JSON.parse(localStorage.getItem("auth"));
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

const AuthRedirect = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/" replace /> : children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthRedirect>
                <Login />
              </AuthRedirect>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRedirect>
                <Register />
              </AuthRedirect>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/whatsappicon"
            element={
              <ProtectedRoute>
                <WhatsappIcon />
              </ProtectedRoute>
            }
          />
          <Route
            path="/parts"
            element={
              <ProtectedRoute>
                <Parts />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
