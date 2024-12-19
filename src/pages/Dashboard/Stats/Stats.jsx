import DashboardBtn from "../../../components/dashboardBtn";

const Stats = () => {
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>
      <p className="text-center mb-4 mt-[3rem] md:mt-0">Performance Summary</p>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
      <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
        Your <span className="text-[#9dad37]">Product Insights</span>
      </h2>
      <hr className="w-[30%] mx-auto h-[3px] bg-black" />
    </div>
  );
};

export default Stats;
