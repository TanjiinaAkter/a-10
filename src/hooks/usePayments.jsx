import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePayments = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [], refetch:paymentrefetch } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      //console.log(res.data);
      return res.data;
    },
    enabled: !loading && !!user.email,
  });
    return [payments, paymentrefetch]
};

export default usePayments;
