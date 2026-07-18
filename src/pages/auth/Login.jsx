import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, saveAuthData } from "../../services/authService";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});

  const quickAccess = ["Real-time order tracking across all platforms", "Daily operations and checklist management", "Financial reporting and analytics", "Staff scheduling and HR tools"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setMessage("");
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      const data = await loginUser({
        email: form.email,
        password: form.password,
      });

      saveAuthData({
        token: data.token,
        user: data.user,
      });

      setMessage("Login successful. Redirecting...");

      setTimeout(() => {
        if (data.user?.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
      }, 700);
    } catch (err) {
      setMessage(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="foodos-page">
      <Navbar />

      <AuthLayout badge="Secure Restaurant Login" title="Welcome Back" subtitle="Sign in to access your restaurant management dashboard and continue streamlining your food business operations." highlights={quickAccess} infoTitle="New to BR30 FoodOS?" infoText="Start your free trial and unlock billing, orders, kitchen, inventory, analytics and AI-powered operations in one place." cardTitle="Sign in to your account" cardSubtitle="Enter your email and password to access your dashboard.">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="email">Email</label>

            <div className="auth-input-wrap">
              <input id="email" name="email" type="email" placeholder="owner@restaurant.com" value={form.email} onChange={handleChange} autoComplete="email" />
            </div>

            {errors.email && <span className="auth-error">{errors.email}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>

            <div className="auth-input-wrap">
              <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" value={form.password} onChange={handleChange} autoComplete="current-password" />

              <button type="button" className="auth-password-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {errors.password && <span className="auth-error">{errors.password}</span>}
          </div>

          <div className="auth-form-row">
            <label className="auth-checkbox">
              <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
              <span>Remember me</span>
            </label>

            <Link to="/forgot-password" className="auth-link">
              Forgot password?
            </Link>
          </div>

          {message && <div className="auth-message">{message}</div>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}

            {!loading && <ArrowRight size={17} />}
          </button>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-bottom-text">
            Don't have an account? <Link to="/register">Start your free trial</Link>
          </p>
        </form>
      </AuthLayout>

      <Footer />
    </main>
  );
}
