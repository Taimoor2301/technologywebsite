import Card from "./Card";
import { Section3Data } from "../../../Data";

const Section3 = () => {
  return (
    <main className="xl:px-32 px-4 bg-[#b5c9e7] py-8">
      <div className="my-2">
        <span className="text-sm text-gray-500 bg-[#f5f5f5] px-4 py-1 rounded font-semibold">
          HOW WE DO
        </span>
        <h1 className="text-5xl my-8 font-bold">SOLUTIONS</h1>
      </div>

      <section className="grid md:grid-cols-8 lg:grid-cols-9 gap-5">
        {Section3Data.cardData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </section>

      <div className="my-8 text-center">
        <button className="text-white font-bold text-sm rounded bg-[#010ed0] hover:bg-gray-800 transition-all shadow-md px-5 py-3">
          <a href={Section3Data.allSolutionsLink}>View All Solutions</a>
        </button>
      </div>
    </main>
  );
};

export default Section3;
