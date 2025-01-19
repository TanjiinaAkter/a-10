import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/single?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCarts;
