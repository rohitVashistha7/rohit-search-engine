import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Logo from "../assets/sm_logo.png";
import SearchInput from "./SearchInput";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setImageSearch(isTypeImage ? true : false);
    setSelectedMenu(menuItem.name);
  };

  return (
    <div className="p-4 md:p-5 border-b border-[#ebebeb] sticky top-0 bg-white">
      <div className="flex items-center justify-center ">
        <Link to="/">
          <img className="w-20 md:w-[100px] mr-7" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center justify-center ">
        <SearchInput from="searchResult" />
      </div>
      <div className="flex justify-center mt-3 space-x-4">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center text-sm p-2 cursor-pointer relative ${
              selectedMenu === menu.name ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => clickHandler(menu)}
          >
            {menu.icon}
            <span className="ml-1">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-1 w-full bg-blue-600 absolute bottom-0 left-0" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
