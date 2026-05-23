import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { BsArrowRight } from "react-icons/bs";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Circles from "../components/Circles";
import Bulb from "../components/Bulb";
import ServiceSlider from "../components/ServiceSlider";
import WorkSlider from "../components/WorkSlider";
import TestimonialSlider from "../components/TestimonialSlider";

import { fadeIn } from "../variants";

// about data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Best Web Developer Recognition Award",
        stage: "2023 - 2024",
      },
      {
        title: "Frontend Development Excellence Award",
        stage: "2023 - 2025",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Sovanza",
        stage: "2024 - Present",
      },
      {
        title: "Web Developer - 5th Gen Company",
        stage: "2022 - 2024",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "F.A - Intermediate Arts & IT",
        stage: "Faisalabad - 2021",
      },
    ],
  },
];

const Home = () => {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {/* ===== HOME SECTION ===== */}
      <section id="home" className="min-h-screen relative bg-primary/60">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center pt-24 sm:pt-28 xl:pt-40 xl:text-left min-h-screen container mx-auto px-4 sm:px-6">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="h1 text-[28px] sm:text-[35px] md:text-[60px]"
            >
              Transforming Ideas <br /> Into{" "}
              <span className="text-accent">Digital Excellence</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 sm:mb-10 xl:mb-16 text-sm sm:text-base px-2 sm:px-0"
            >
              We deliver world-class digital solutions that combine innovative
              design, advanced technology, and strategic thinking to help
              businesses establish a powerful online presence. From custom
              websites and enterprise web applications to high-performance
              eCommerce platforms, we create experiences that are visually
              refined, scalable, and results-driven.
            </motion.p>

            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>

        <div className="w-[1280px] h-full absolute right-0 bottom-0">
          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />
          <ParticlesContainer />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="min-h-screen relative bg-primary/30 py-20 sm:py-32 text-center xl:text-left px-4 sm:px-6 xl:px-0">
        <Circles />

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="h2"
            >
              Where Creativity Meets{" "}
              <span className="text-accent">Purposeful</span> Digital Craft
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              Great design is not just about visuals — it's about storytelling,
              strategy, and delivering real impact. I transform ideas into clean,
              modern, and high-performing digital experiences that help businesses
              grow and stand out.
            </motion.p>

            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap justify-center md:flex-nowrap md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-1 xl:gap-x-6 w-full">
                <div className="relative flex-1 sm:after:w-[1px] sm:after:h-full sm:after:bg-white/10 sm:after:absolute sm:after:top-0 sm:after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                    Years of Experience
                  </div>
                </div>
                <div className="relative flex-1 sm:after:w-[1px] sm:after:h-full sm:after:bg-white/10 sm:after:absolute sm:after:top-0 sm:after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={30} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                    Completed Projects
                  </div>
                </div>
                <div className="relative flex-1 sm:after:w-[1px] sm:after:h-full sm:after:bg-white/10 sm:after:absolute sm:after:top-0 sm:after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={100} duration={5} />%
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                    Client Satisfaction
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={2} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                    Awards & Recognition
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px]"
          >
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-3 gap-y-3 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-items-center sm:justify-center xl:justify-start">
              {aboutData.map((item, itemI) => (
                <div
                  key={itemI}
                  className={`${
                    aboutIndex === itemI &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setAboutIndex(itemI)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {aboutData[aboutIndex].info.map((item, itemI) => (
                <div
                  key={itemI}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="min-h-screen relative bg-primary/30 py-20 sm:py-36 flex items-center px-4 sm:px-6 xl:px-0">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[25vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="h2 xl:mt-8"
              >
                MY SERVICES <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                A results-driven Frontend Developer and WordPress Specialist
                dedicated to crafting high-end, high-performance digital
                solutions that combine stunning aesthetics with flawless
                functionality.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full xl:max-w-[70%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </section>

      {/* ===== WORK SECTION ===== */}
      <section id="work" className="min-h-screen relative bg-primary/30 py-20 sm:py-36 flex items-center px-4 sm:px-6 xl:px-0">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="h2 xl:mt-12"
              >
                MY WORK <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                A curated showcase of high-end digital experiences, premium
                WordPress solutions, and interactive frontend interfaces crafted
                with meticulous attention to detail, clean architecture, and
                flawless visual aesthetics.
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="testimonials" className="min-h-screen relative bg-primary/30 py-20 sm:py-32 text-center flex items-center px-4 sm:px-6 xl:px-0">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="h2 mb-8 xl:mb-0"
          >
            What clients <span className="text-accent">say.</span>
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="min-h-screen relative bg-primary/30 flex items-center px-4 sm:px-6 xl:px-0 pb-20 xl:pb-0">
        <div className="container mx-auto py-20 sm:py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="h2 text-center mb-12"
            >
              Let's <span className="text-accent">connect.</span>
            </motion.h2>

            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
              autoComplete="off"
              autoCapitalize="off"
              name="contact"
            >
              <div className="flex flex-col sm:flex-row gap-y-4 gap-x-6 w-full">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="textarea"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let's talk
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
