import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";

const AdminRoutes = (children) => {
    const [user, loading] = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();


    if (loading || isAdminLoading) {
        return <span className="loading loading-dots loading-xl"></span>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/logIn'></Navigate>
}
export default AdminRoutes;