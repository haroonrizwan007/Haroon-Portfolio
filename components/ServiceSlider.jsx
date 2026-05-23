import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

const serviceData = [
  {
    Icon: RxPencil2,
    title: "UI/UX & Web Design",
    description: "Crafting premium, user-centric interfaces and responsive visual experiences with high-end design systems, glassmorphism layouts, and modern cinematic aesthetics.",
  },
  {
    Icon: RxDesktop,
    title: "Frontend Development",
    description: "Building interactive, fast, and scalable web structures by transforming complex design layouts into clean, semantic code with smooth animations.",
  },
  {
    Icon: RxReader,
    title: "Advanced WordPress Engineering",
    description: "Developing elite e-commerce stores and custom business platforms using Elementor Pro, featuring bespoke CSS customization and dynamic field configurations.",
  },
  {
    Icon: RxRocket,
    title: "Motion & Interactive Experiences",
    description: "Bringing websites to life with premium 3D structures, interactive layout modules, and modern scrolling experiences to elevate user engagement.",
  },
];

const ServiceSlider = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
      {serviceData.map((item, i) => (
        <div
          key={i}
          className="bg-[rgba(65,47,123,0.15)] rounded-lg px-4 py-4 flex flex-col group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
        >
          {/* icon */}
          <div className="text-3xl text-accent mb-2">
            <item.Icon aria-hidden />
          </div>

          {/* title & description */}
          <div className="mb-2">
            <div className="mb-1 text-base font-semibold">{item.title}</div>
            <p className="leading-normal text-xs text-white/70">{item.description}</p>
          </div>

          {/* arrow */}
          <div className="text-2xl mt-auto">
            <RxArrowTopRight
              className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
              aria-hidden
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSlider;
