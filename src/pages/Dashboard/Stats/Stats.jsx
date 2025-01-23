import { useEffect, useState } from "react";
import DashboardBtn from "../../../components/dashboardBtn";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import usePayments from "../../../hooks/usePayments";

const Stats = () => {
  const axiosSecure = useAxiosSecure();
  const [payments] = usePayments();
  const { data: adminStats = {} } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log(res.data);
      return res.data;
    },
  });
  const [statusPie, setStatusPie] = useState([]);

  useEffect(() => {
    if (adminStats.getstatusPercantage && adminStats.getstatusPercantage) {
      const pieData = adminStats.getstatusPercantage.map((data) => ({
        name: data.status,
        value: parseFloat(data.statusPercantage),
      }));
      setStatusPie(pieData);
    }
  }, [adminStats]);

  //============= PIE CHART =================//
  const COLORS = ["#0088FE", "#FF9D23", "#A294F9", "#e63629"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  //============= BAR CHART =================//

  // Step 1: Get today's date
  const today = new Date();

  // Step 2: Create an empty array to hold sales data for the past 7 days
  const last7DaysData = [];

  for (let i = 0; i < 7; i++) {
    const eachDate = new Date();
    //today theke i mane 1,2,3,4,5,6,7 emn kore minus kore ager day pacchi
    eachDate.setDate(today.getDate() - i);
    const getShortDate = eachDate.toISOString().split("T")[0];
    const totalSale = payments
      .filter((payment) => payment.date.startsWith(getShortDate))
      .reduce((acc, total) => acc + total.price, 0);
    console.log(totalSale);
    last7DaysData.push({ date: getShortDate, totalSale });
  }
  last7DaysData.reverse();
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>
      <p className="text-center mb-4 mt-[3rem] md:mt-0">Performance Summary</p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Product Insights</span>
      </h2>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <div className="my-6 flex mx-auto w-[90%] flex-wrap md:flex-nowrap justify-between items-center gap-3">
        <div
          className="relative w-full h-32 text-white p-3"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/m4DDknh/black-friday-best-sale-shopping-cart-with-bags.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          {/* Content */}
          <div className="flex h-full relative text-white flex-col font-semibold z-10 ">
            <h3 className="font-semibold text-lg">ORDERS</h3>
            <p className="font-bold text-2xl">{adminStats.orders}</p>
          </div>
        </div>
        <div
          className="bg-red-600 w-full relative p-3 h-32 "
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/Xzx84Jx/colorful-paper-shopping-bags-blue-surface.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          <div className="absolute bg-opacity-80 bg-[#82161f] inset-0"></div>
          <div className="flex h-full relative text-white flex-col font-semibold z-10 ">
            <h3 className="font-semibold text-lg">PRODUCTS</h3>
            <p className="font-bold text-2xl">{adminStats.products}</p>
          </div>
        </div>
        <div
          className="bg-blue-600 p-3 w-full relative h-32"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/mbn6CH5/hand-holding-growth-arrow-with-coins.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute inset-0 bg-blue-700 bg-opacity-60"></div>
          <div className="relative z-10 flex flex-col text-white">
            <h3 className="font-semibold text-lg">REVENUE</h3>
            <p className="font-bold text-2xl">$ {adminStats.revenue}</p>
          </div>
        </div>
        <div
          className="relative p-3 w-full h-32"
          style={{
            backgroundImage:
              'url("https://i.ibb.co.com/JxVgPx2/folded-colorful-clothes-arranged-closet-lights-181624-13644.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="absolute bg-green-600 inset-0 bg-opacity-50"></div>
          <div className="flex flex-col relative z-10 text-white">
            <h3 className="font-semibold text-lg">CATEGORIES</h3>
            <p className="font-bold text-2xl">
              {adminStats.topCategoriesLength}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={400} height={400}>
            <Pie
              data={statusPie}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value">
              {statusPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className=" w-full md:w-[70%] mx-auto">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={last7DaysData}>
            {/* graph paper er moto grid line gulo show korbe */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            {/* legend hocceh konta ki color */}
            <Legend></Legend>
            <Bar
              dataKey="totalSale"
              fill="#D91656"
              activeBar={<Rectangle fill="green" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
