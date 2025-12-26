import "boxicons";

const Header = () => {
  // simple toggle
  const toggleMenu = () => {
    const mobMenu = document.getElementById("mobileM");

    if (mobMenu.classList.contains("hidden")) {
      mobMenu.classList.remove("hidden");
    } else {
      mobMenu.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">Wow</h1>

      {/* nav elements */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          Navi 1
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          Navi 2
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
        >
          Navi 3
        </a>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        CLICK ME
      </button>

      {/* menu icons but mobile */}
      <button onClick={toggleMenu} className="md:hidden text-3xl p-2z-50">
        <box-icon name="menu" color="#ffffff"></box-icon>
      </button>

      {/* mobile menu - hidden by default */}
      <div
        id="mobileM"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            Navi 1
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            Navi 2
          </a>
          <a
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          >
            Navi 3
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
