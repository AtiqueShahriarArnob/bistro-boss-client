import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseAdmin = () => {
    const { user, loading } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin = false, isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            return res.data.admin;
        }
    });

    return [isAdmin, isLoading];
};

export default UseAdmin;
