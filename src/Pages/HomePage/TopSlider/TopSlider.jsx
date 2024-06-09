import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import img1 from "../../../assets/slider_Images/img_1.jpg"
import img2 from "../../../assets/slider_Images/img_2.jpg"
import img3 from "../../../assets/slider_Images/img_3.jpg"
import img4 from "../../../assets/slider_Images/img_4.jpg"
import img5 from "../../../assets/slider_Images/img_5.jpg"
import img6 from "../../../assets/slider_Images/img_6.jpg"
const TopSlider = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    return (
        <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 md:h-[100vh] bg-cover bg-center flex justify-center md:items-center items-end " style={{backgroundImage:`url(${img1})`}}>

                <div className='md:w-3/4 bg-[rgba(20,20,19,0.56)] space-y-6 text-center p-12 rounded-lg'>
                <h2 className='text-4xl font-semibold text-blue-400'>Get in Shape and Unleash Your Inner Athlete at Our Sports Boot Camp!</h2>
                <p className='text-white'>Join our intensive sports boot camp designed to push your limits, enhance your skills, and transform your fitness level. Prepare to sweat, challenge yourself, and achieve greatness!</p>
                </div>


        </div>
        <div className="keen-slider__slide number-slide2 h-[100vh] bg-cover bg-center flex justify-center md:items-center items-end" style={{backgroundImage:`url(${img2})`}}>

        <div className='md:w-3/4 bg-[rgba(20,20,19,0.56)] space-y-6 text-center p-12 rounded-lg'>
                <h2 className='text-4xl font-semibold text-blue-400'>Experience the Ultimate Sports Training Program at Our Boot Camp!</h2>
                <p className='text-white'>Elevate your game to new heights with our comprehensive sports training program. Led by expert coaches, our boot camp will help you refine techniques, improve endurance, and gain a competitive edge.</p>
                </div>

        </div>
        <div className="keen-slider__slide number-slide3 h-[100vh] bg-cover bg-center flex justify-center md:items-center items-end" style={{backgroundImage:`url(${img3})`}}>3
        <div className='md:w-3/4 bg-[rgba(20,20,19,0.56)] space-y-6 text-center p-12 rounded-lg'>
                <h2 className='text-4xl font-semibold text-blue-400'>Calling All Sports Enthusiasts! Join Our High-Intensity Boot Camp Today!</h2>
                <p className='text-white'>Whether you're a seasoned athlete or just starting your sports journey, our high-intensity boot camp offers a dynamic environment to build strength, speed, agility, and teamwork. Don't miss out on this thrilling experience!</p>
                </div>


        </div>
        <div className="keen-slider__slide number-slide4 h-[100vh] bg-cover bg-center flex justify-center md:items-center items-end" style={{backgroundImage:`url(${img4})`}}>
        <div className='md:w-3/4 bg-[rgba(20,20,19,0.56)] space-y-6 text-center p-12 rounded-lg'>
                <h2 className='text-4xl font-semibold text-blue-400'>Train with the Best at Our Sports Boot Camp!</h2>
                <p className='text-white'>Our sports boot camp brings together top-notch trainers, cutting-edge facilities, and a supportive community to help you unlock your full potential. Embrace the challenge and witness the incredible results.</p>
                </div>
        </div>
        <div className="keen-slider__slide number-slide5 h-[100vh] bg-cover bg-center flex justify-center md:items-center items-end" style={{backgroundImage:`url(${img5})`}}>
        <div className='md:w-3/4 bg-[rgba(20,20,19,0.56)] space-y-6 text-center p-12 rounded-lg'>
                <h2 className='text-4xl font-semibold text-blue-400'>Ignite Your Passion for Sports at Our Elite Boot Camp Program!</h2>
                <p className='text-white'>Designed for athletes seeking a next-level experience, our elite boot camp program combines advanced training methods, personalized coaching, and a competitive atmosphere to ignite your passion for sports like never before.</p>
                </div>
        </div>
        <div className="keen-slider__slide number-slide6 h-[100vh] bg-cover bg-center flex justify-center md:items-center items-end" style={{backgroundImage:`url(${img6})`}}>
        <div className='md:w-3/4 bg-[rgba(20,20,19,0.56)] space-y-6 text-center p-12 rounded-lg'>
                <h2 className='text-4xl font-semibold text-blue-400'>Achieve Peak Performance at Our Sports Boot Camp: Train, Compete, Excel!</h2>
                <p className='text-white'>Dive into an immersive sports boot camp that focuses on maximizing your performance in every aspect. From skill development to mental toughness, our program will equip you with the tools to excel on and off the field.</p>
                </div>
        </div>
      </div>
    );
};

export default TopSlider;