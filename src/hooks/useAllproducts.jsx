import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllproducts = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allproducts = [], refetch } = useQuery({
    queryKey: ["allproducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allproducts");
      return res.data;
    },
  });
  return [allproducts, refetch];
};

export default useAllproducts;
