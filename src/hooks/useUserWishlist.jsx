import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserWishlist = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: wishlist = [], refetch: wishlistRefetch } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/wishlist/userwishlist?email=${user?.email}`
      );
      return res.data;
    },
    enabled: !loading && !!user?.email,
  });
  return [wishlist, wishlistRefetch];
};

export default useUserWishlist;
