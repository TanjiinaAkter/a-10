import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllUsers = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      //console.log(res.data);
      return res.data;
    },
    enabled: !loading && !!user?.email,
  });
  return [allUsers, refetch];
};

export default useAllUsers;
