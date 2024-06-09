
const AllInstractorCard = ({instractor}) => {
  const {name,email,image} = instractor
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" className="max-h-60 w-full object-cover object-top"/></figure>
  <div className="card-body">
    <h2 className="card-title">Instractor Name: {name}</h2>
    <p>email: {email}</p>
    
  </div>
</div>
    );
};

export default AllInstractorCard;