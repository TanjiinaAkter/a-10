import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/single?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [reviews, refetch];
};

export default useReviews;
