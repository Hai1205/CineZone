import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1100, min: 600 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 3
  }
};

const MovieList = ({ title, data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-white p-10 mb-10">
        <h2 className="uppercase text-xl mb-4">{title}</h2>
        <p>Không có phim nào để hiển thị.</p>
      </div>
    );
  }

  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <Carousel
        responsive={responsive}
        className="flex items-center space-x-4"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-[300px] relative group flex-shrink-0"
          >
            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-2">
                <p className="uppercase text-md">
                  {item.title || item.original_title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
