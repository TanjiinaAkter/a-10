const ExtraSection = () => {
  return (
    <div className=" my-[5rem] p-1 md:p-0 bg-[#f3f3f3]">
      <div className="mx-auto w-[79%] flex flex-col space-y-5 md:flex-row justify-between items-center gap-5 my-12 bg-[#f3f3f3]">
        <div className="flex  flex-col  flex-1 space-y-4 justify-start">
          <h2 className="text-3xl font-semibold text-gray-500">
            Ethereal Styles
          </h2>
          <p className="text-gray-400 my-4">
            Step into a world of timeless elegance and style. From refined
            fashion to exquisite home decor, Zuri Luxe offers handpicked
            collections designed to elevate your everyday moments.
          </p>
          <div className="flex justify-start">
            <button className="bg-black text-[#9dad37] px-3 py-2 text-[1rem] font-[700] hover:bg-[#9dad37] hover:text-black transition-all duration-1000">
              Explore More
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            className="mx-auto w-full md:h-[35rem] object-cover"
            src="https://i.ibb.co.com/VN8C0R9/jacek-dylag-jo8-C9bt3uo8-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
