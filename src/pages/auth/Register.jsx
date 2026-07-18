import { useState } from "react";
import { registerUser } from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { ArrowRight, Eye, EyeOff, Mail } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const trialBenefits = ["Create account with secure email OTP verification", "14-day free trial for your food business", "POS, kitchen, inventory and analytics ready dashboard", "No payment required to start"];

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

    if (!form.firstName.trim()) nextErrors.firstName = "First name is required";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.businessName.trim()) nextErrors.businessName = "Business name is required";

    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{8,16}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,}$/.test(form.password)) {
      nextErrors.password = "Password must be 8+ characters with uppercase, lowercase, number and special character";
    }

    if (!form.confirmPassword.trim()) {
      nextErrors.confirmPassword = "Confirm password is required";
    } else if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.agree) nextErrors.agree = "Please accept the Terms, Privacy Policy and Disclaimer to continue.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      await registerUser({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        businessName: form.businessName,
        phone: form.phone,
        password: form.password,
        agree: form.agree,
      });

      setMessage("A 6-digit OTP has been sent to your registered email.");

      setTimeout(() => {
        navigate("/verify-otp", {
          state: {
            flow: "register",
            email: form.email,
          },
        });
      }, 900);
    } catch (err) {
      setMessage(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="foodos-page">
      <Navbar />

      <AuthLayout badge="Start BR30 FoodOS Trial" title="Start Your Free Trial" subtitle="Create your FoodOS account. We'll verify your email with a secure 6-digit OTP before activating your workspace." highlights={trialBenefits} infoTitle="Built for modern food businesses" infoText="After registration, verify your OTP to unlock billing, orders, kitchen, inventory, staff and analytics tools." cardTitle="Create your account" cardSubtitle="Fill your business details. OTP verification comes next.">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-grid-2">
            <div className="auth-field">
              <label htmlFor="firstName">First Name</label>
              <div className="auth-input-wrap">
                <input id="firstName" name="firstName" type="text" placeholder="Prakash" value={form.firstName} onChange={handleChange} autoComplete="given-name" />
              </div>
              {errors.firstName && <span className="auth-error">{errors.firstName}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="lastName">Last Name</label>
              <div className="auth-input-wrap">
                <input id="lastName" name="lastName" type="text" placeholder="Kumar" value={form.lastName} onChange={handleChange} autoComplete="family-name" />
              </div>
              {errors.lastName && <span className="auth-error">{errors.lastName}</span>}
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <div className="auth-input-wrap">
              <input id="email" name="email" type="email" placeholder="owner@restaurant.com" value={form.email} onChange={handleChange} autoComplete="email" />
            </div>
            {errors.email && <span className="auth-error">{errors.email}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="businessName">Business Name</label>
            <div className="auth-input-wrap">
              <input id="businessName" name="businessName" type="text" placeholder="BR30 Cafe" value={form.businessName} onChange={handleChange} autoComplete="organization" />
            </div>
            {errors.businessName && <span className="auth-error">{errors.businessName}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="phone">Phone Number</label>
            <div className="auth-input-wrap">
              <input id="phone" name="phone" type="tel" placeholder="+91 9999999999" value={form.phone} onChange={handleChange} autoComplete="tel" />
            </div>
            {errors.phone && <span className="auth-error">{errors.phone}</span>}
          </div>

          <div className="auth-grid-2">
            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <div className="auth-input-wrap">
                <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Password" value={form.password} onChange={handleChange} autoComplete="new-password" />

                <button type="button" className="auth-password-btn" onClick={() => setShowPassword((value) => !value)} aria-label="Toggle password visibility">
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.password && <span className="auth-error">{errors.password}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="confirmPassword">Confirm</label>
              <div className="auth-input-wrap">
                <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm" value={form.confirmPassword} onChange={handleChange} autoComplete="new-password" />

                <button type="button" className="auth-password-btn" onClick={() => setShowConfirmPassword((value) => !value)} aria-label="Toggle confirm password visibility">
                  {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {errors.confirmPassword && <span className="auth-error">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="auth-form-row">
            <label className="auth-checkbox">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />

              <span>
                I agree to the{" "}
                <Link to="/terms" className="auth-link">
                  Terms & Conditions
                </Link>
                ,{" "}
                <Link to="/privacy" className="auth-link">
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link to="/disclaimer" className="auth-link">
                  Disclaimer
                </Link>
                .
              </span>
            </label>
          </div>

          {errors.agree && <span className="auth-error">{errors.agree}</span>}

          {message && (
            <div className="auth-message">
              <Mail size={16} />
              {message}
            </div>
          )}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Create Account & Send OTP"}
            {!loading && <ArrowRight size={17} />}
          </button>

          <p className="auth-bottom-text">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </AuthLayout>

      <Footer />
    </main>
  );
}
