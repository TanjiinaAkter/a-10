import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserWishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: wishlist = [], refetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/wishlist/userwishlist?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [wishlist, refetch];
};

export default useUserWishlist;
