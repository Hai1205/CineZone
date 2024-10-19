import InconRating from "../assets/rating.png";
import InconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center, bg-repeat, bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-3">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">
              Nghe nói em thích tôi
            </h2>
            <div className="space-x-3 flex items-center">
              <img src={InconRating} alt="rating" className="w-8 h-8" />
              <img src={InconRating} alt="rating" className="w-8 h-8" />
              <img src={InconRating} alt="rating" className="w-8 h-8" />
              <img src={InconRating} alt="rating" className="w-8 h-8" />
              <img src={InconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              dolor, beatae et aspernatur quisquam pariatur ab provident
              eligendi, a libero iusto itaque distinctio, cum doloremque
              possimus ipsam cupiditate nostrum. Error.
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white bg-black font-bold text-sm">
                Chi tiết
              </button>
              <button className="p-3 text-white bg-red-600 font-bold text-sm">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
