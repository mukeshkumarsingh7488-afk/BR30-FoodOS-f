import { Navigate, useLocation } from "react-router-dom";
import { getStoredToken, getStoredUser } from "../../services/authService";

export default function AdminRoute({ children }) {
  const location = useLocation();

  const token = getStoredToken();
  const user = getStoredUser();

  if (!token || !user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
