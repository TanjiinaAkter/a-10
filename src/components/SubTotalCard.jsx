import { Link } from "react-router-dom";

const SubTotalCard = ({ subTotal, calculation }) => {
  return (
    <div className="m-5 shadow-md p-4 rounded-sm h-max">
      <h2 className="uppercase font-semibold">Order Summary</h2>
      <hr className="my-2 bg-black w-full h-[2px]" />
      <div className="flex justify-between items-end">
        {/* {subtotal} */}
        <h2 className=" font-semibold mt-6">subtotal :</h2>
        <p className=" font-semibold">$ {subTotal}</p>
      </div>
      <hr className="my-1" />
      <div className="flex justify-between items-end">
        <h2 className="font-semibold  mt-6">Tax</h2>
        <p className="font-semibold">15%</p>
      </div>
      <div className="flex justify-between items-end">
        <h2 className="font-semibold  mt-6">Delivery Charge</h2>
        <p className="font-semibold text-green-500">Free</p>
      </div>
      <hr className="my-1" />
      <div className="flex justify-between items-end">
        <h2 className=" font-bold uppercase mt-6">Order Total</h2>
        <p className="font-semibold">{ calculation }
          
          $  </p>
      </div>
      <hr className="my-1" />
      <p className="text-gray-400 font-semibold my-4 text-[14px]">
        Tax included & shipping calculated at checkout
      </p>
      <div className=" w-full">
        <Link to="/checkout">
          <button className=" px-3 py-[8px] uppercase text-sm transition-all duration-500 hover:bg-gray-300 hover:text-black font-semibold  mb-4 w-full bg-black text-white inline-block">
            Proceed to checkout
          </button>
        </Link>
        <Link to="/">
          <button className="px-3 py-[6px] border-black hover:bg-black hover:text-white hover:transition-all duration-1000 border text-sm uppercase font-semibold  mb-1 w-full bg-white text-black inline-block">
            Continue to shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubTotalCard;
