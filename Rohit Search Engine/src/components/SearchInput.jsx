import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[46px] min-w-fit md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87] flex-1 placeholder-gray-400"
        placeholder=""
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>
      <IoMdSend
        color="blue"
        size={20}
        className="cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
