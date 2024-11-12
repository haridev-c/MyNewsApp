import Card from "./Card";
import { useState, useEffect } from "react";

function Newsapp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const API_KEY = "cc8143bb6cff467a937f2b8911627272";

  const getData = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  /*const handleCategoryClick = (category) => {
    setSearch(category);
  };*/
  const userInput = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between bg-[rgb(92,159,192)] p-2.5">
        <div className="inline-block bg-transparent text-black text-2xl font-extrabold py-1 px-3 rounded-md tracking-widest shadow-lg italic">
          <h1>Daily Now</h1>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto mt-2 md:mt-0">
          <input
            className="w-full md:w-64 no-underline p-2.5 border-none text-lg rounded-md"
            type="text"
            placeholder="Search News"
            onChange={handleInput}
            value={search}
          ></input>
          <button
            className="bg-blue-500 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg"
            onClick={getData}
          >
            Search
          </button>
        </div>
      </nav>
      <div className="mt-2 mb-4">
        <p className="text-center font-medium text-lg md:text-2xl">
          Stay updated with{" "}
          <span className="text-red-600 font-extrabold font-mono">
            Daily Now
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
        {/* Hamburger icon for smaller screens */}
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/menu--v6.png"
          alt="menu icon"
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        />

        {/* Category buttons - visible as dropdown on small screens */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-wrap md:space-x-4 flex-col md:flex-row items-center space-y-2 md:space-y-0 bg-white md:bg-transparent p-4 md:p-0 rounded-md shadow-lg md:shadow-none`}
        >
          {[
            "sports",
            "politics",
            "entertainment",
            "health",
            "business",
            "technology",
          ].map((category) => (
            <button
              key={category}
              className="bg-blue-400 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg transform hover:translate-y-0.5 w-full md:w-auto text-center"
              onClick={userInput}
              value={category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="m-4">{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
}

export default Newsapp;
