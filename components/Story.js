const Story = () => {
  return (
    <section className="story__container">
      <div className="bg-gray-50 w-full px-7 py-5 sm:flex sm:items-center">
        <div className="flex flex-col items-start space-y-8 sm:pl-10 lg:pl-24">
          <h3 className="primary__text text-lg font-thin uppercase">
            Happy Customers
          </h3>
          <h1 className="text-4xl lg:text-5xl font-sans italic text-gray-800">
            &ldquo; The Best decision of our lives &ldquo;
          </h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nam
            suscipit, quisquam praesentium dolores veniam!
          </p>

          <button className="px-7 py-2 uppercase font-sans primary__color text-white">
            Find your own home
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage:
            'linear-gradient(rgba(198, 153, 99, 0.5), rgba(198, 153, 99, 0.5)), url("images/back.jpg")',
          backgroundPosition: "center center",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="grid place-items-center h-full relative">
          <img src="/images/story-1.jpeg" alt="" className="h-52 lg:h-72" />
          <img
            src="/images/story-2.jpeg"
            alt=""
            className="hidden lg:block h-52 lg:h-52 absolute top-60 left-80 z-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
