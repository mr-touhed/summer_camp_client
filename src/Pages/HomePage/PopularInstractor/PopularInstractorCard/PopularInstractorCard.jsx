
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
const PopularInstractorCard = ({instractor}) => {
  const {name,email,image} = instractor;
  return (
    <div className="card md:card-side bg-base-100 shadow-xl ">
      <figure className="md:w-1/2 p-0 ">
        <img
          className="md:h-[239px] w-full object-cover object-top h-full"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body bg-blue-200 flex justify-center items-center">
          <div className="space-y-3">

          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{email}</h2>
          <div className="flex justify-around gap-6">
          <AiOutlineTwitter className="w-8 h-8"/>
          <AiOutlineInstagram className="w-8 h-8"/>
          <AiOutlineFacebook className="w-8 h-8"/>
          <AiOutlineLinkedin className="w-8 h-8"/>
        </div>
          </div>
       
      </div>
    </div>
  );
};

export default PopularInstractorCard;
