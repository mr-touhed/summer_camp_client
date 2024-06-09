import images from "../../../assets/slider_Images/img_5.jpg";
import basketball from "../../../assets/icons/basketball.png"
import landscape from "../../../assets/icons/landscape.png"
import experience from "../../../assets/icons/experience.png"
const WhyChooseUs = () => {

    // TODO: Change Images 
  return (
    <div className="my-8 px-6">
      <div className="md:flex items-center ">
        <img
          src={images}
          alt=""
          className="md:w-[600px] rounded-lg shadow-lg"
        />

        <div className="text-center md:ml-6">
          <h2 className="text-6xl font-semibold mb-6">Why Choose Us</h2>
          <p>
            we pride ourselves on offering a one-of-a-kind sports camp
            experience that sets us apart from the rest. With a combination of
            top-notch facilities, expert coaching, and a commitment to
            individualized attention, we are the premier choice for sports
            enthusiasts of all ages and skill levels
          </p>

          <div className="flex justify-between md:w-3/4 mx-auto mt-6">
            <div className="bg-blue-100 md:p-3 rounded-lg flex flex-col justify-center">
                <img src={basketball} alt="" className="md:w-20" />
                        <p className="font-bold">Diversity abounds</p>
            </div>
            
            <div className="bg-blue-100 p-3 rounded-lg flex flex-col justify-center mx-3 md:mx-0">
                <img src={landscape} alt="" className="w-20" />
                        <p className="font-bold">Natural all the way</p>
            </div>
            <div className="bg-blue-100 md:p-3 rounded-lg flex flex-col justify-center">
                <img src={experience} alt="" className="md:w-20" />
                        <p className="font-bold">Experienced and <br></br> trustworthy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
