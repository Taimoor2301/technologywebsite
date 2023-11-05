import logo from "../../../assets/Navbar/1.jpg";
import menu from "../../../assets/Navbar/MenuIcons/menu.svg";
import cross from "../../../assets/Navbar/MenuIcons/cross.svg";

import { useState } from "react";

import { MobileNavData } from "../../../Data";
import Dropdown from "./Dropdown";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-[1000] overflow-visible">
      <img src={logo} className="w-36" />
      <div className="flex gap-4">
        <button className="bg-[#010ed0] text-white px-4 text-[13px] rounded-md font-semibold hover:bg-gray-900 transition-all self-center py-2 shadow-md">
          Contact Us
        </button>

        <img
          src={menuOpen ? cross : menu}
          className="w-7"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <div
        className={`w-full ${
          menuOpen ? "h-[80vh] shadow-md overflow-scroll" : "h-0"
        } overflow-hidden absolute bg-white top-[100%] left-0 z-50 transition-all`}
        onScroll={(e) => e.stopPropagation()}
      >
        <div className="p-5 flex flex-col gap-5 mobile-menu">
          {MobileNavData.links.map((e, i) => {
            if (e.dropdown) {
              return <Dropdown key={i} {...e} />;
            } else {
              return (
                <a href={e.href} key={i} className="font-bold">
                  {e.title}
                </a>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
