import "boxicons";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <div className="relative w-[95%] sm:w-98 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <box-icon name="diamond" type="solid" color="#ffffff"></box-icon>
            Title
          </div>
        </div>

        <h1 className="test-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Text 1
          <br />
          Text 2
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          djlafhasdkjfhalsdf fhajkdfhalsdkhaskdjfh ajflakdsfhlakdhfnacrupiqohef
        </p>

        <div className="flex gap-4 mt-12">
          <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            Huwaw <box-icon name="link-external" color="#ffffff"></box-icon>
          </a>

          <a
            href="#"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            Huwawow <box-icon name="link-external" color="#ffffff"></box-icon>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
