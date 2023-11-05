import { successStories } from "../../../Data";
import Sec5Card from "./Sec5Card";

const Section5 = () => {
  return (
    <section className="px-2 xl:px-32 my-5 xl:my-10">
      <div className="my-4">
        <span className="bg-gray-200 py-1 px-3 text-gray-600 text-sm">
          {successStories.headings.smallHeading}
        </span>
      </div>

      <h1 className="font-bold text-2xl sm:text-5xl mt-5 sm:mb-10 mb-4 text-gray-800">
        {successStories.headings.mainHeading}
      </h1>

      <div className="flex gap-5 overflow-x-scroll lg:overflow-x-hidden">
        {successStories.cards.map((item, index) => (
          <Sec5Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Section5;
