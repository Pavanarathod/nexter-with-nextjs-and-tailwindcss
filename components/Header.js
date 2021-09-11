const Header = () => {
  return (
    <header
      className="min-h-screen"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          'linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)), url("images/hero.jpeg")',
        backgroundPosition: "center center",
        height: "100vh",
      }}
    >
      <main className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="flex justify-center sm:justify-start py-3">
            <img src="/images/logo.png" alt="" className="h-10" />
          </div>
          <div className="space-y-5 sm:space-y-7 ml-10 sm:ml-0">
            <p className="uppercase text-[#cea87e]">your own home</p>
            <h1 className="text-gray-300 font-sans font-semibold text-4xl sm:text-6xl sm:w-full">
              The ultimate personal freedom
            </h1>
            <button className="px-8 py-3 bg-[#ca9a63] text-white uppercase text-sm">
              view our properties
            </button>
          </div>

          <div>
            <div className="flex justify-center text-white">
              <span className="text-gray-300 text-sm">Seen on</span>
            </div>
            <div className="flex justify-between items-center py-5 px-5">
              <img
                src="/images/logo-bbc.png"
                alt=""
                className="header__add__images"
              />
              <img
                src="/images/logo-bi.png"
                alt=""
                className="header__add__images"
              />
              <img
                src="/images/logo-forbes.png"
                alt=""
                className="header__add__images"
              />
              <img
                src="/images/logo-techcrunch.png"
                alt=""
                className="header__add__images"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 lg:bg-transparent grid justify-center lg:justify-end lg:pt-24 py-5">
          <div>
            <h1 className="text-center text-lg font-mono text-[#ca9a63] uppercase">
              top 3 realtors
            </h1>

            <div className="rel__container">
              <div className="rel__items">
                <img
                  src="/images/realtor-1.jpeg"
                  alt=""
                  className="img__reltors"
                />
                <div className="rel__info">
                  <h1 className="rel__title">Erik Fenimon</h1>
                  <p className="rel__subtitle">245 house hold</p>
                </div>
              </div>
              <div className="rel__items">
                <img
                  src="/images/realtor-2.jpeg"
                  alt=""
                  className="img__reltors"
                />
                <div className="rel__info">
                  <h1 className="rel__title">Erik Fenimon</h1>
                  <p className="rel__subtitle">245 house hold</p>
                </div>
              </div>
              <div className="rel__items">
                <img
                  src="/images/realtor-3.jpeg"
                  alt=""
                  className="img__reltors"
                />
                <div className="rel__info">
                  <h1 className="rel__title">Erik Fenimon</h1>
                  <p className="rel__subtitle">245 house hold</p>
                </div>
              </div>
              <button className="px-5 py-2 rounded-full font-mono text-white bg-[#ca9a63]">
                More
              </button>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
