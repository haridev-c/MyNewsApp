import defaultImg from "../assets/newsimg.jpg";
const Card = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((curItem, index) => (
          <div
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg w-80"
            key={index}
          >
            <img
              className="w-full h-48 object-cover rounded-t-lg"
              src={curItem.urlToImage ? curItem.urlToImage : defaultImg}
              alt={curItem.title || "Default Image"}
            />
            <div className="p-4 flex flex-col flex-grow">
              <a
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold mb-2 hover:underline text-black-600"
              >
                {curItem.title.slice(0, 50)}
              </a>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {curItem.description
                  ? curItem.description.slice(0, 90)
                  : "No description available."}
              </p>
              <a
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded transition duration-200 text-center mt-auto"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
