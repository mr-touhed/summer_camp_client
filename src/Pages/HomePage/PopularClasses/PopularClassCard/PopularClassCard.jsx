import { Link } from "react-router-dom";

const PopularClassCard = ({ classData }) => {
  const { image, classes,} = classData;
  return (
    <Link to="/classes">
    
    <div className="card card-compact  md:w-96 bg-base-100 shadow-xl ">
      <figure >
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-3xl font-semibold">{classes}</h2>
        <p className="text-center">Lets See our Classes</p>
      </div>
    </div>
    </Link>
  );
};

export default PopularClassCard;
