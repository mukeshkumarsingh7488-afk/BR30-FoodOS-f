import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";

// Landing Pages
import LandingPage from "./pages/landing/LandingPage";
import ContactPage from "./pages/ContactPage";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import RefundPolicy from "./pages/legal/RefundPolicy";
import Disclaimer from "./pages/legal/Disclaimer";
import CookiePolicy from "./pages/legal/CookiePolicy";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import MenuManagement from "./pages/dashboard/MenuManagement";
import Orders from "./pages/dashboard/Orders";
import QRTables from "./pages/dashboard/QRTables";
import Staff from "./pages/dashboard/Staff";
import Settings from "./pages/dashboard/Settings";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";

// Route Protection
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminRoute from "./components/auth/AdminRoute";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* ===========================
             Public Routes
        ============================ */}

        <Route path="/" element={<LandingPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookies" element={<CookiePolicy />} />

        {/* ===========================
             Authentication
        ============================ */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* ===========================
             Business Dashboard
        ============================ */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/menu"
          element={
            <ProtectedRoute>
              <MenuManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/qr-tables"
          element={
            <ProtectedRoute>
              <QRTables />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/staff"
          element={
            <ProtectedRoute>
              <Staff />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* ===========================
             Admin Dashboard
        ============================ */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
