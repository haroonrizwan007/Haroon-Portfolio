import { useState, useEffect } from "react";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", sectionId: "home", Icon: HiHome },
  { name: "about", sectionId: "about", Icon: HiUser },
  { name: "services", sectionId: "services", Icon: HiRectangleGroup },
  { name: "work", sectionId: "work", Icon: HiViewColumns },
  {
    name: "testimonials",
    sectionId: "testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    sectionId: "contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navData.map((link) =>
        document.getElementById(link.sectionId)
      );
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navData[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 sm:px-8 md:px-40 xl:px-0 h-[60px] sm:h-[80px] xl:h-max py-4 sm:py-8 bg-white/10 backdrop-blur-sm text-2xl sm:text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <button
            className={`${
              link.sectionId === activeSection && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300 bg-transparent border-none cursor-pointer`}
            onClick={() => scrollToSection(link.sectionId)}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
