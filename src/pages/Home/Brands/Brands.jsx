// import { useEffect, useState } from "react";
// // import PropTypes from "prop-types";
// import UniqueBrand from "../UniqueBrand/UniqueBrand";
// import "./Brands.css";
// // import { useLoaderData } from "react-router-dom";

// const Brands = () => {
//   //  console.log(datas);
// //   const datas = useLoaderData();
//   //console.log(datas);

// //   const [brandshow, setBransShow] = useState([]);
//   //console.log("data in brand unique", brandshow);
// //   useEffect(() => {
// //     const store = [];
// //     datas.forEach((data) => {
// //       const add = store.some((st) => st.brandname === data.brandname);
// //       // mille output true, noyto false hoye output ashbe ... 6ta false mane mile nai 6 ta...baki gulo true ashbe.. then condotion dibo jodi false hoy tahole false gulo push koro store array te
// //       //console.log(add);
// //       if (!add) {
// //         store.push(data);
// //       }
// //       // console.log(store);
// //       setBransShow(store);
// //     });
// //   }, [datas]);
//   return (
//     <div className="mx-auto md:w-[80%] my-[5rem]">
//       <h2 className="text-center text-3xl md:text-4xl text-gray-500 font-semibold">
//         Find Your <span className="text-[#9dad37]">Perfect Fit</span>
//       </h2>
//       <hr className="mx-auto w-[5%] my-6 h-[3px] bg-[#b7c940]" />
//       <div className="flex flex-wrap gap-6 justify-center p-6">
//         <div className="flex flex-wrap md:flex-nowrap  w-full justify-center gap-6">
//           {brandshow.slice(0, 3).map((brand) => (
//             <UniqueBrand
            
//               key={brand._id}
//               brand={brand}></UniqueBrand>
//           ))}
//         </div>
//         <div className="flex flex-wrap md:flex-nowrap w-full justify-center gap-6 ">
//           {brandshow.slice(3, 5).map((brand) => (
//             <UniqueBrand key={brand._id} brand={brand}></UniqueBrand>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brands;


const Brands = () => {
    return (
        <div>
            <h2>brands</h2>
        </div>
    );
};

export default Brands;