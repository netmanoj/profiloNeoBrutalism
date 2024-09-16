import Typewriter from "typewriter-effect";


const Hero = () => {
  return (
    <section 
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center border-black border-b-2"
      style={{ backgroundImage: "url('/images/back.png')" }}
    >
      <div className="relative w-100 h-auto border-4 border-black bg-white rounded-lg hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-shadow duration-300 flex items-center p-8">
        {/* Profile Photo */}
        <div className="w-32 h-32 rounded-full border-4 border-black bg-gray-200 shadow-[8px_8px_0_rgba(0,0,0,1)] overflow-hidden mr-6">
          <img
            src="/images/profile.png" // Replace with your profile photo URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Box */}
        <div className="flex flex-col">
          <h1 className="text-4xl mb-6 text-black font-[Anton]">Manoj Adhikari</h1>
          <h2 className="text-2xl text-black font-elite">
            <Typewriter
              options={{
                strings: ["a Web Developer", "a MERN Stack Developer", "a Linux Enthusiast"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
