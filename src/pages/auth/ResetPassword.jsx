import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resendResetOtp, resetPassword } from "../../services/authService";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { ArrowRight, Eye, EyeOff, RotateCcw, ShieldCheck } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const emailFromState = location.state?.email || "";

  const [email, setEmail] = useState(emailFromState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const resetBenefits = ["Secure 6-digit OTP based password reset", "OTP expires automatically after 5 minutes", "Resend OTP option with cooldown protection", "Future-ready for 2FA and device verification"];

  const startTimer = () => {
    setResendTimer(60);

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setMessage("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({
      ...prev,
      email: "",
    }));
    setMessage("");
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.otp.trim()) {
      nextErrors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(form.otp.trim())) {
      nextErrors.otp = "Enter a valid 6-digit OTP";
    }

    if (!form.password.trim()) {
      nextErrors.password = "New password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,}$/.test(form.password)) {
      nextErrors.password = "Password must be 8+ characters with uppercase, lowercase, number and special character";
    }

    if (!form.confirmPassword.trim()) {
      nextErrors.confirmPassword = "Confirm password is required";
    } else if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match";
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

      await resetPassword({
        email,
        otp: form.otp,
        password: form.password,
      });

      setMessage("Password reset successful. Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setMessage(err.message || "Password reset failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setMessage("");

    if (!email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is required to resend OTP",
      }));
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter a valid email address",
      }));
      return;
    }

    try {
      setResending(true);

      await resendResetOtp({ email });

      startTimer();
      setMessage("A new 6-digit OTP has been sent to your registered email.");
    } catch (err) {
      setMessage(err.message || "Failed to resend OTP. Please try again.");
    } finally {
      setResending(false);
    }
  };
  return (
    <main className="foodos-page">
      <Navbar />

      <AuthLayout badge="Secure OTP Reset" title="Create New Password" subtitle="Enter your 6-digit OTP and create a strong new password for your BR30 FoodOS account." highlights={resetBenefits} infoTitle="OTP Protected Recovery" infoText="Password reset is allowed only after verifying the OTP sent to your registered email." cardTitle="Reset your password" cardSubtitle="Verify OTP and set your new password.">
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="email">Email Address</label>

            <div className="auth-input-wrap">
              <input id="email" name="email" type="email" placeholder="owner@restaurant.com" value={email} onChange={handleEmailChange} autoComplete="email" />
            </div>

            {errors.email && <span className="auth-error">{errors.email}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="otp">6-Digit OTP</label>

            <div className="auth-input-wrap">
              <input id="otp" name="otp" type="text" inputMode="numeric" maxLength="6" placeholder="Enter 6-digit OTP" value={form.otp} onChange={handleChange} autoComplete="one-time-code" />
            </div>

            {errors.otp && <span className="auth-error">{errors.otp}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="password">New Password</label>

            <div className="auth-input-wrap">
              <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Create new password" value={form.password} onChange={handleChange} autoComplete="new-password" />

              <button type="button" className="auth-password-btn" onClick={() => setShowPassword((value) => !value)} aria-label="Toggle password visibility">
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {errors.password && <span className="auth-error">{errors.password}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <div className="auth-input-wrap">
              <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm new password" value={form.confirmPassword} onChange={handleChange} autoComplete="new-password" />

              <button type="button" className="auth-password-btn" onClick={() => setShowConfirmPassword((value) => !value)} aria-label="Toggle confirm password visibility">
                {showConfirmPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>

            {errors.confirmPassword && <span className="auth-error">{errors.confirmPassword}</span>}
          </div>

          {message && (
            <div className="auth-message">
              <ShieldCheck size={16} />
              {message}
            </div>
          )}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Resetting password..." : "Reset Password"}
            {!loading && <ArrowRight size={17} />}
          </button>

          <button type="button" className="auth-resend-btn" onClick={handleResendOtp} disabled={resending || resendTimer > 0}>
            <RotateCcw size={15} />
            {resending ? "Resending OTP..." : resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
          </button>

          <p className="auth-bottom-text">
            Back to <Link to="/login">Sign in</Link>
          </p>
        </form>

        <style>{`
.auth-resend-btn{width:100%;height:46px;border-radius:13px;border:1px solid var(--border);background:rgba(255,255,255,.045);color:var(--text-soft);font-weight:800;font-size:14px;display:inline-flex;align-items:center;justify-content:center;gap:9px;transition:all .22s ease}.auth-resend-btn:hover{border-color:var(--primary);color:var(--text);background:var(--surface-2)}.auth-resend-btn:disabled{opacity:.62;cursor:not-allowed}
        `}</style>
      </AuthLayout>

      <Footer />
    </main>
  );
}
