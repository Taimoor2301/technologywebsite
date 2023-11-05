import Section4element from "./Section4element";
import { Section4data } from "../../../Data";

const Section4 = () => {
  return (
    <main className="bg-white flex justify-center items-center py-10">
      <section className="p-4 lg:max-w-4xl">
        <div className="my-4">
          <span className="bg-gray-200 py-1 px-3 text-gray-600 text-sm">
            {Section4data.section4Headings.smallHeading}
          </span>
        </div>

        <h1 className="font-bold text-2xl sm:text-5xl mt-5 sm:mb-10 mb-4 text-gray-800">
          {Section4data.section4Headings.mainHeading}
        </h1>

        <div className="flex gap-10 justify-start px-4 flex-wrap py-10">
          {Section4data.section4Items.map((item, index) => (
            <Section4element key={index} {...item} />
          ))}
        </div>

        <a
          href={Section4data.section4Link.link}
          className="font-semibold hover:text-gray-800 hover:border-gray-800 text-blue-700 transition-all border-b-4 pb-1"
        >
          {Section4data.section4Link.title}
        </a>
      </section>
    </main>
  );
};

export default Section4;
