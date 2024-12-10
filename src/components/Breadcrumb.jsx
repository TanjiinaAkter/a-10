import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  const formatPath = (path) => {
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className=" text-sm mt-28 px-28 bg-gray-100 py-3 ">
      <ul className="flex flex-row">
        <li className=" text-gray-400 font-semibold text-lg text-center">
          <Link to="/">Home</Link>
        </li>
        {paths.map((path, index) => {
          const fullpath = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li className=" text-gray-400 font-semibold text-lg" key={index}>
              <span className="mx-2">/</span> {/* Separator */}
              {isLast ? (
                <span>{formatPath(path)}</span>
              ) : (
                <Link to={fullpath}>{formatPath(path)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Breadcrumb;
