import { clutch } from "../../../assets/sec-2";
import Stars from "../../../assets/sec-2/Stars";

const Clutch = () => {
  return (
    <div className="flex xl:gap-3 gap-10 items-center w-full pb-10 xl:w-auto border-b xl:border-b-0">
      <div className="flex flex-col gap-3">
        <span className="font-semibold text-xs text-gray-500">REVIEWED ON</span>
        <img src={clutch} alt="clutch" />
      </div>
      <div className="flex flex-col gap-3">
        <Stars />
        <span className="text-sm text-gray-500 font-semibold">31 REVIEWS</span>
      </div>
    </div>
  );
};

export default Clutch;
