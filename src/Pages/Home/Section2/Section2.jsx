import Clutch from "./Clutch";

import { Section2Data } from "../../../Data";
import Blackbox from "./Blackbox";
import Sec2Card from "./Sec2Card";

const Section2 = () => {
  return (
    <main className="xl:px-32 px-4">
      <div className="py-20 border-b">
        {/*text items below */}
        <div className="flex justify-between flex-wrap xl:gap-5 gap-12">
          <Clutch />
          {Section2Data.detailComponents.map((e, i) => (
            <div className="flex gap-4" key={i}>
              <div
                className="bg-gray-300 h-[60%] w-1"
                title="line hai ye"
              ></div>
              <div>
                <div>
                  <span className="font-semibold text-4xl">{e.heading1}</span>{" "}
                  <span className="font-semibold text-2xl">{e.heading2}</span>
                </div>
                <div className="font-normal text-xl">{e.heading3}</div>
              </div>
            </div>
          ))}
        </div>

        <Blackbox />

        <div className="grid  md:grid-cols-2  grid-cols-1 lg:grid-cols-5 xl:flex justify-between gap-10">
          {Section2Data.cards.map((e, i) => (
            <Sec2Card key={i} {...e} />
          ))}
        </div>
      </div>
      <div className="my-8 flex flex-col gap-1 items-start">
        <a href="#" className="text-[#010ed0] font-semibold text-sm">
          About
        </a>
        <div className="w-16 bg-gray-400 hover:bg-[#010ed0] h-1"></div>
      </div>
    </main>
  );
};

export default Section2;
