import { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        className="bg-mainColor text-white py-2 px-4"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
        className="bg-secondColor text-mainColor py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
