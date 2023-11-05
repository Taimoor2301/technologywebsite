import { Section1Data } from "../../../Data";

const Home = () => {
  return (
    <main className="xl:px-32 px-4">
      <div className="land grid-cols-12 border-b py-16">
        <div className="flex flex-col justify-end lg:gap-10 gap-6 land-1">
          <h1 className=" lg:text-6xl  text-3xl md:max-w-[80%] md:font-[640] font-bold text-gray-900 ">
            {Section1Data.heading}
          </h1>
          <h2 className="xl:text-3xl lg:text-2xl  font-[500] text-gray-800 lg:max-w-xl">
            {Section1Data.subHeading}
          </h2>

          <div className="flex gap-8 flex-col sm:flex-row items-start">
            <a
              href={Section1Data.button1.link}
              className="bg-[#010ed0] shadow text-white text-sm font-semibold py-3 px-5 rounded hover:bg-gray-900 transition-all"
            >
              {Section1Data.button1.name}
            </a>
            <a
              className="bg-[#dee0ff] z-40 shadow text-[#010ed0]  font-semibold py-3 px-6 rounded hover:bg-gray-900 transition-all hover:text-white"
              href={Section1Data.button2.link}
            >
              {Section1Data.button2.name}
            </a>
          </div>
        </div>
        {/* image */}

        <div className="land-2">
          <img src={Section1Data.image} alt="" className="rounded-lg" />
        </div>
      </div>
    </main>
  );
};

export default Home;
