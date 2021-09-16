const Homes = ({ data }) => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        <img src={data.image} alt="" />
        <h1 className="px-8 py-3 bg-gray-800 shadow-lg font-mono text-gray-200 absolute top-[160px] sm:top-[190px] lg:top-[215px]">
          {data.title}
        </h1>
      </div>
      <div className="pt-14 flex space-y-8 flex-col">
        <div className="flex items-cente w-full px-12 mx-auto justify-between">
          <h3 className="font-sans text-gray-600">{data.nation}</h3>
          <h3 className="font-sans text-gray-600">{data.rooms}</h3>
        </div>
        <div className="flex items-cente w-full px-12 mx-auto justify-between">
          <h3 className="font-sans text-gray-600">{data.meter}</h3>
          <h3 className="font-sans text-gray-600">{data.price}</h3>
        </div>
      </div>
      <div className="pt-4">
        <button className="py-3 primary__color w-full text-white font-mono">
          Contact Realtor
        </button>
      </div>
    </div>
  );
};

export default Homes;
