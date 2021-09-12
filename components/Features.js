import { content } from "../utils/content";
const Features = () => {
  return (
    <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 sm:py-32 mt-[20rem] sm:mt-12 lg:mt-0">
      {content.map(({ title, detail, Image }) => (
        <div className="px-10">
          <div className="flex space-x-3">
            <div>{Image}</div>
            <div className="flex flex-col space-y-4 mt-3">
              <h1 className="text-lg text-gray-800 font-semibold">{title}</h1>
              <p className="text-gray-600 text-sm font-thin">{detail}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
