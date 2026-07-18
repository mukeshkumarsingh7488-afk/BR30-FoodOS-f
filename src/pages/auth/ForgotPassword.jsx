import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, resendResetOtp } from "../../services/authService";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { ArrowRight, Mail, RotateCcw } from "lucide-react";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const securityTips = ["6-digit OTP will be sent to your registered email", "OTP expires automatically after 5 minutes", "Resend OTP option with cooldown protection", "Encrypted verification and password recovery"];

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address");
      return false;
    }

    return true;
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!validateEmail()) return;

    try {
      setLoading(true);

      await forgotPassword({ email });

      setOtpSent(true);
      startTimer();
      setMessage("A 6-digit verification OTP has been sent to your registered email.");

      setTimeout(() => {
        navigate("/reset-password", {
          state: { email },
        });
      }, 900);
    } catch (err) {
      setMessage(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setMessage("");
    setError("");

    if (!validateEmail()) return;

    try {
      setResending(true);

      await resendResetOtp({ email });

      setOtpSent(true);
      startTimer();
      setMessage("A new OTP has been sent to your registered email.");
    } catch (err) {
      setMessage(err.message || "Failed to resend OTP. Please try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="foodos-page">
      <Navbar />

      <AuthLayout badge="Account Recovery" title="Forgot Your Password?" subtitle="Enter your registered email address to receive a secure OTP and reset your BR30 FoodOS account password." highlights={securityTips} infoTitle="Security First" infoText="We'll send a secure one-time password (OTP) to your registered email before allowing you to create a new password." cardTitle="Reset Password" cardSubtitle="Enter your registered email address to receive a verification OTP.">
        <form className="auth-form" onSubmit={handleSubmit}>
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
                  setError("");
                  setMessage("");
                  setOtpSent(false);
                }}
                autoComplete="email"
              />
            </div>

            {error && <span className="auth-error">{error}</span>}
          </div>

          {message && (
            <div className="auth-message">
              <Mail size={16} />
              {message}
            </div>
          )}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : otpSent ? "Continue to Reset Password" : "Send OTP"}
            {!loading && <ArrowRight size={17} />}
          </button>

          {otpSent && (
            <button type="button" className="auth-resend-btn" onClick={handleResendOtp} disabled={resending || resendTimer > 0}>
              <RotateCcw size={15} />
              {resending ? "Resending OTP..." : resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
            </button>
          )}

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-bottom-text">
            Remember your password? <Link to="/login">Sign in</Link>
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
