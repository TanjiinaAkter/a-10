import { useForm } from "react-hook-form";
import DashboardBtn from "../../../components/dashboardBtn";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// https://i.ibb.co.com/K0RxRCx/vecteezy-woman-working-on-computer-notebook-planner-3444482.jpg
const AddProduct = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.quantitylarge = Number(data.quantitylarge);
    data.quantitymedium = Number(data.quantitymedium);
    data.quantitysmall = Number(data.quantitysmall);
    data.price = Number(data.price);
    data.discountedPrice = Number(data.discountedPrice);
    data.discountedPercentage = Number(data.discountedPercentage);

    console.log(data);
    axiosSecure.post("/allproducts", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added successfully!!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
          onSubmit={handleSubmit(onSubmit)}
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
                {...register("title", { required: true })}
                type="text"
                placeholder="name"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.title && <span>This field is required</span>}
            </div>
            <div className="form-control  md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Brand name
                </span>
              </label>
              <input
                {...register("brandname", { required: true })}
                type="text"
                placeholder="brand name"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.brandname && <span>This field is required</span>}
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
                {...register("topCategory")}
                className="border text-gray-400 border-gray-300 border-none rounded-sm px-3 py-2">
                <option className="text-gray-400" disabled>
                  Category type
                </option>
                <option className="text-gray-400" value="Men">
                  Men
                </option>
                <option className="text-gray-400" value="Women">
                  Women
                </option>
                <option className="text-gray-400" value="Kids">
                  Kids
                </option>
                <option className="text-gray-400" value="Homedecor">
                  Home Décor & Accessories
                </option>
              </select>
              {errors.topCategory && <span>This field is required</span>}
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Second level category
                </span>
              </label>
              <select
                {...register("secondCategory")}
                className="border text-gray-400 border-none rounded-sm px-3 py-2">
                <option className="text-gray-400" value="clothing">
                  Clothing
                </option>
                <option className="text-gray-400" value="decor">
                  decor
                </option>
              </select>
              {errors.secondCategory && <span>This field is required</span>}
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Third level category
                </span>
              </label>
              <select
                {...register("thirdCategory")}
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
                <option className="text-gray-400" value="skirts">
                  Skirts
                </option>
                <option className="text-gray-400" value="pants">
                  Pants
                </option>
                <option className="text-gray-400" value="decor">
                  Decor
                </option>
              </select>
              {errors.thirdCategory && <span>This field is required</span>}
            </div>
            {/* <div>
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div> */}
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
                {...register("description", { required: true })}
                type="text"
                placeholder="description"
                name="description"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.description && <span>This field is required</span>}
            </div>
            <div className="form-control md:w-1/2 w-full ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Color
                </span>
              </label>
              <input
                {...register("color", { required: true })}
                type="text"
                placeholder="Color"
                name="color"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.color && <span>This field is required</span>}
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
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
                name="price"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.price && <span>This field is required</span>}
            </div>
            <div className="form-control md:w-1/2 lg:w-1/3">
              <label className="label">
                <span className="label-text font-semibold md:text-base lg:text-[1rem]">
                  Discounted Percentage
                </span>
              </label>

              <input
                {...register("discountedPercentage", { required: true })}
                type="number"
                placeholder="discounted Percentage"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.discountedPercentage && (
                <span>This field is required</span>
              )}
            </div>
            <div className="form-control md:w-full lg:w-1/3">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Discounted Price
                </span>
              </label>

              <input
                {...register("discountedPrice", { required: true })}
                type="number"
                placeholder="discounted price"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.discountedPrice && <span>This field is required</span>}
            </div>
          </div>
          {/* ====================== Fifth ROW ================*/}
          {/* <div className="md:flex gap-3 my-3">
            <div className="form-control  w-full ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Color
                </span>
              </label>
              <input
                {...register("color", { required: true })}
                type="text"
                placeholder="Color"
                name="color"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.color && <span>This field is required</span>}
            </div>
          </div> */}
          {/* ====================== Sixth ROW ================*/}
          <div className="md:flex gap-3 my-3">
            <div className="form-control  md:w-1/2 ">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size name
                </span>
              </label>
              <input
                {...register("sizenamesmall", { required: true })}
                type="text"
                placeholder="Size name"
                name="sizenamesmall"
                defaultValue={"S"}
                readOnly
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.sizenamesmall && <span>This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size Quantity
                </span>
              </label>
              <input
                {...register("quantitysmall", { required: true })}
                type="number"
                name="quantitysmall"
                placeholder="quantity"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.quantitysmall && <span>This field is required</span>}
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
                {...register("sizenamemedium", { required: true })}
                type="text"
                readOnly
                placeholder="Size name"
                name="sizenamemedium"
                defaultValue={"M"}
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.sizenamemedium && <span>This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size Quantity
                </span>
              </label>
              <input
                {...register("quantitymedium", { required: true })}
                type="number"
                name="quantitymedium"
                placeholder="quantity"
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.quantitymedium && <span>This field is required</span>}
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
                {...register("sizenamelarge", { required: true })}
                type="text"
                placeholder="Size name"
                name="sizenamelarge"
                readOnly
                defaultValue={"L"}
                className="input border-none rounded-none w-full input-bordered"
                required
              />
              {errors.sizenamelarge && <span>This field is required</span>}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-[1rem]">
                  Size Quantity
                </span>
              </label>
              <input
                {...register("quantitylarge", { required: true })}
                type="number"
                name="quantitylarge"
                placeholder="quantity"
                className="input border-none rounded-none w-full input-bordered"
                required
              />{" "}
              {errors.quantitylarge && <span>This field is required</span>}
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
              {...register("photo", { required: true })}
              type="text"
              placeholder="photo"
              name="photo"
              className="input border-none rounded-none w-full input-bordered"
              required
            />
            {errors.photo && <span>This field is required</span>}
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
