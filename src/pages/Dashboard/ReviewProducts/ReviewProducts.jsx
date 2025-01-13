import { FaBookmark, FaRev } from "react-icons/fa";
import DashboardBtn from "../../../components/dashboardBtn";
import useReviews from "../../../hooks/useReviews";
import ReviewsCard from "./ReviewsCard";

const ReviewProducts = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <div className="md:mt-5">
      <DashboardBtn></DashboardBtn>
      <div className="md:mt-12 mx-auto w-[85%]">
        <p className="text-center mb-4 mt-[3rem] md:mt-0">
          your review about these product
        </p>
        <hr className="w-[20%] mx-auto h-[3px] bg-black" />
        <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
          Product <span className="text-[#9dad37]">Review</span>
        </h2>
        <hr className="w-[20%] mx-auto h-[3px] bg-black" />

        <div className="grid-cols-1 md:grid-cols-2 gap-4 my-12 ">
          {reviews.map((item) => (
            <ReviewsCard key={item._id} item={item}></ReviewsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;
