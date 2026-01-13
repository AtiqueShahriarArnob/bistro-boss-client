import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";

const AdminRoutes = ({ children }) => {
    const { user, loading } = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return (
        <Navigate
            to="/"
            state={{ from: location }}
            replace
        />
    );
};

export default AdminRoutes;
