import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const UseCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = UseAuth();

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/cart?email=${user.email}`);
            return res.data;
        }
    });

    return [cart, refetch];
};

export default UseCart;
