import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resendRegisterOtp, saveAuthData, verifyOtp } from "../../services/authService";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { ArrowRight, Mail, RotateCcw, ShieldCheck } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";

export default function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();

  const emailFromState = location.state?.email || "";
  const flow = location.state?.flow || "register";

  const [email, setEmail] = useState(emailFromState);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(emailFromState ? "A 6-digit OTP has been sent to your email." : "");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  const verifyBenefits = ["Secure 6-digit email OTP verification", "OTP expires automatically after 5 minutes", "Resend OTP option with cooldown protection", "Protects your BR30 FoodOS workspace"];

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

  const validateForm = () => {
    const nextErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!otp.trim()) {
      nextErrors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(otp.trim())) {
      nextErrors.otp = "Enter a valid 6-digit OTP";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    try {
      setLoading(true);

      const data = await verifyOtp({
        email,
        otp,
      });

      if (data.token && data.user) {
        saveAuthData({
          token: data.token,
          user: data.user,
        });
      }

      setMessage("Email verified successfully. Redirecting...");

      setTimeout(() => {
        navigate("/login");
      }, 900);
    } catch (err) {
      setMessage(err.message || "OTP verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setMessage("");
    setErrors({});

    if (!email.trim()) {
      setErrors({ email: "Email is required to resend OTP" });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrors({ email: "Enter a valid email address" });
      return;
    }

    try {
      setResending(true);

      await resendRegisterOtp({
        email,
      });

      startTimer();
      setMessage("A new 6-digit OTP has been sent to your email.");
    } catch (err) {
      setMessage(err.message || "Failed to resend OTP. Please try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="foodos-page">
      <Navbar />

      <AuthLayout badge="Email Verification" title="Verify Your Email" subtitle="Enter the 6-digit OTP sent to your registered email to activate your BR30 FoodOS account." highlights={verifyBenefits} infoTitle="Almost Done" infoText="After OTP verification, your FoodOS workspace will be ready for login and future dashboard access." cardTitle="Verify OTP" cardSubtitle={flow === "register" ? "Complete your account verification." : "Complete your verification."}>
        <form className="auth-form" onSubmit={handleVerify}>
          <div className="auth-field">
            <label htmlFor="email">Email Address</label>
            <div className="auth-input-wrap">
              <input
                id="email"
                type="email"
                placeholder="owner@restaurant.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                  setMessage("");
                }}
                autoComplete="email"
              />
            </div>
            {errors.email && <span className="auth-error">{errors.email}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="otp">6-Digit OTP</label>
            <div className="auth-input-wrap">
              <input
                id="otp"
                type="text"
                inputMode="numeric"
                maxLength="6"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                  setErrors((prev) => ({ ...prev, otp: "" }));
                  setMessage("");
                }}
                autoComplete="one-time-code"
              />
            </div>
            {errors.otp && <span className="auth-error">{errors.otp}</span>}
          </div>

          {message && (
            <div className="auth-message">
              <Mail size={16} />
              {message}
            </div>
          )}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Verifying OTP..." : "Verify OTP"}
            {!loading && <ShieldCheck size={17} />}
          </button>

          <button type="button" className="auth-resend-btn" onClick={handleResendOtp} disabled={resending || resendTimer > 0}>
            <RotateCcw size={15} />
            {resending ? "Resending OTP..." : resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
          </button>

          <p className="auth-bottom-text">
            Wrong email? <Link to="/register">Go back to register</Link>
          </p>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-bottom-text">
            Already verified? <Link to="/login">Sign in</Link>
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
