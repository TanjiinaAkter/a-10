import DashboardBtn from "../../../components/dashboardBtn";

// https://i.ibb.co.com/K0RxRCx/vecteezy-woman-working-on-computer-notebook-planner-3444482.jpg
const AddProduct = () => {
  //e
  const handleAddProduct = () => {
    // e.preventDefault();
    // const form = e.currentTarget;
    // const name = form.name.value;
    // const brandname = form.brandname.value;
    // const type = form.type.value;
    // const price = form.price.value;
    // const description = form.description.value;
    // const rating = Number(form.rating.value);
    // console.log(typeof rating);
    // const photo = form.photo.value;
    // console.log(name, price, brandname, type, description, rating, photo);
    // const product = {
    //   name,
    //   brandname,
    //   type,
    //   price,
    //   description,
    //   rating,
    //   photo,
    // };
    // fetch("http://localhost:5000/brands", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div className="md:mt-12">
      <DashboardBtn></DashboardBtn>

      <div className="mx-auto w-[90%] md:w-[70%] ">
        <p className="text-center mb-4">Start adding products</p>
        <hr className="w-[30%] mx-auto h-[3px] bg-black" />
        <h2 className="text-gray-500 md:text-3xl  text-center my-1  font-semibold text-[1rem] ">
          Your <span className="text-[#9dad37]">Add Product</span>
        </h2>
        <hr className="w-[30%] mx-auto h-[3px] bg-black" />
        <form
          onSubmit={handleAddProduct}
          className="card-body p-[1rem] md:p-[2rem] bg-[#edf5f9] my-12">
          {/* ====================== FIRST ROW ================*/}
          <div className="md:flex gap-3 my-3">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Title
                </span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
            <div className="form-control  md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Brand name
                </span>
              </label>
              <input
                type="text"
                placeholder="brand name"
                name="brandname"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* ====================== SECOND ROW ================*/}
          <div className="md:flex md:gap-3 my-3">
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold  text-[1rem]">
                  Top level category
                </span>
              </label>

              <select
                className="border text-gray-400 border-gray-300 border-none rounded-sm px-3 py-2"
                name=""
                id="">
                <option className="text-gray-400" value="category type">
                  Category type
                </option>
                <option className="text-gray-400" value="men">
                  Men
                </option>
                <option className="text-gray-400" value="women">
                  Women
                </option>
                <option className="text-gray-400" value="kids">
                  Kids
                </option>
                <option className="text-gray-400" value="homedecor">
                  Home Décor & Accessories
                </option>
              </select>
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Second level category
                </span>
              </label>
              <select
                name=""
                id=""
                className="border text-gray-400 border-none rounded-sm px-3 py-2">
                <option className="text-gray-400" value="tshirts">
                  Clothing
                </option>
                <option className="text-gray-400" value="jeans">
                  decor
                </option>
              </select>
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Third level category
                </span>
              </label>
              <select
                name=""
                id=""
                className="border text-gray-400 border-none rounded-sm px-3 py-2">
                <option className="text-gray-400" value="tshirts">
                  T-shirts
                </option>
                <option className="text-gray-400" value="jeans">
                  Jeans
                </option>
                <option className="text-gray-400" value="jackets">
                  Jackets
                </option>
                <option className="text-gray-400" value="tops">
                  Tops
                </option>
                <option className="text-gray-400" value="dresses">
                  Dresses
                </option>
                <option className="text-gray-400" value="skirts ">
                  Skirts
                </option>
                <option className="text-gray-400" value="pants">
                  Pants
                </option>
              </select>
            </div>
          </div>
          {/* ====================== THIRD ROW ================*/}
          <div className="md:flex gap-3 my-3">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Short Description
                </span>
              </label>
              <input
                type="text"
                placeholder="description"
                name="description"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
            <div className="form-control  md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Rating
                </span>
              </label>

              <input
                type="number"
                placeholder="rating"
                name="rating"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* ====================== Fourth ROW ================*/}
          <div className="md:flex justify-between gap-3 my-3">
            <div className="form-control md:w-1/2 lg:w-1/3">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Price
                </span>
              </label>

              <input
                type="number"
                placeholder="price"
                name="price"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 lg:w-1/3">
              <label className="label">
                <span className="label-text font-semibold md:text-base lg:text-[1rem]">
                  Discounted Percentage
                </span>
              </label>

              <input
                type="number"
                placeholder="discounted Percentage"
                name="discountedpercentage"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-full lg:w-1/3">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Discounted Price
                </span>
              </label>

              <input
                type="number"
                placeholder="discounted price"
                name="discountedprice"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* ====================== Fifth ROW ================*/}
          <div className="md:flex gap-3 my-3">
            <div className="form-control  w-full ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Color
                </span>
              </label>
              <input
                type="text"
                placeholder="Color"
                name="color"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* ====================== Sixth ROW ================*/}
          <div className="md:flex gap-3 my-3">
            <div className="form-control  md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size name
                </span>
              </label>
              <input
                type="text"
                placeholder="Size name"
                name="sizenamesmall"
                defaultValue={"S"}
                readOnly
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size Quantity
                </span>
              </label>
              <input
                type="number"
                name="quantitysmall"
                placeholder="quantity"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* ====================== Seventh ROW ================*/}
          <div className="md:flex gap-3 my-3">
            <div className="form-control  md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size name
                </span>
              </label>
              <input
                type="text"
                readOnly
                placeholder="Size name"
                name="sizenamemedium"
                defaultValue={"M"}
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size Quantity
                </span>
              </label>
              <input
                type="number"
                name="quantitymedium"
                placeholder="quantity"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* ====================== Eighth ROW ================*/}
          <div className="md:flex gap-3 my-3">
            <div className="form-control  md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size name
                </span>
              </label>
              <input
                type="text"
                placeholder="Size name"
                name="sizenamelarge"
                readOnly
                defaultValue={"L"}
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size Quantity
                </span>
              </label>
              <input
                type="number"
                name="quantitylarge"
                placeholder="quantity"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
            </div>
          </div>
          {/* ====================== Nineth ROW ================*/}
          <div className="form-control  w-full ">
            <label className="label">
              <span className="label-text font-semibold text-[1rem]">
                Image URL
              </span>
            </label>

            <input
              type="text"
              placeholder="photo"
              name="photo"
              className="input border-none rounded-none w-full input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn inline-block bg-black text-white"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
