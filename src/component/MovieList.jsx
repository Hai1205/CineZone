import { Link, Element } from 'react-scroll';
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

const MovieList = ({ title, data, scrollToTop }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-white p-10 mb-10">
        <h2 className="uppercase text-xl mb-4">{title}</h2>
        <p>Không có phim nào để hiển thị.</p>
      </div>
    );
  }
  
  return (
    <Element name={title} className="text-white p-10 mb-10">
      <div className="uppercase text-xl mb-4">{title}</div>
      <Carousel
        responsive={responsive}
        className="flex items-center space-x-4 z-40"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-[300px] relative group flex-shrink-0"
          >
            <Link className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer" onClick={scrollToTop}>
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
            </Link>
          </div>
        ))}
      </Carousel>
    </Element>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  scrollToTop: PropTypes.func.isRequired,
};

export default MovieList;
