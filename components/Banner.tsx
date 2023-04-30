import Slider from "react-slick";
import Image from "next/image";
import { sliderImgOne } from "../public/assets/images";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
        <div className='w-1 rounded-lg h-[410px] shadow-bannerShadow relative'></div>
          <div className="w-100 h-[410px] relative">
            <Image 
            className="w-full h-full object-cover rounded-lg"
            src = {sliderImgOne} 
            alt = "slideImgOne" 
            priority 
            />
          </div>
          <div>
            <br />
            <h1 className="font-bold text-3xl">Try AR shopping</h1>
            <br /><br /><br /><br /><br />
            <p className="text-1.5xl leading-5">It is give a different experience to you!</p>
            <br /><br /><br /><br /><br />
            <p className="text-sm leading-5">The app only for Android</p>
          </div>
    </div>
  )
}

export default Banner;