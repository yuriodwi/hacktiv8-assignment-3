import { Component } from "react";
import { motion } from "framer-motion";
import SkillsImg from "../img/skills/skills.jpg";
import { Link } from "react-router-dom";
import { transition1 } from "../transition";
class Skills extends Component {
  render() {
    return (
      <section className="section">
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col h-full justify-center items-center">
            {/* my skills */}
            <div className="flex flex-row pt-24 items-center gap-x-10 justify-start text-start">
              <motion.div
                initial={{ opacity: 0, x: "-50%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition1}
                className="max-w-[550px] h-[310px] bg-gray-600 overflow-hidden"
              >
                <img src={SkillsImg} alt="" className="" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "20%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition1}
                className="flex flex-col items-start w-3/4"
              >
                <h1 className="h1">My Skills</h1>
                <p className="mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  fugit veritatis officia atque magnam nesciunt. Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
                <Link to={"/contact"} className="btn overflow-hidden">
                  hire me
                </Link>
              </motion.div>
            </div>

            {/* SKILLS */}
            <div className="flex flex-row w-full justify-between mt-12 gap-x-10">
              <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition1}
                className="w-11/12"
              >
                <div className="relative h-32">
                  <div className="z-10">
                    <h1 className="h1">01</h1>
                    <p className="h2">Photographer</p>
                  </div>
                  <div className="w-3/4 h-32 bg-[#2CBCE9] absolute right-0 top-0 z-[-1]" />
                </div>
                <p className="mt-5"></p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={(transition1, { delay: 0.1 })}
                className="w-11/12"
              >
                <div className="relative h-32">
                  <div className="z-10">
                    <h1 className="h1">02</h1>
                    <p className="h2">Videographer</p>
                  </div>
                  <div className="w-3/4 h-32 bg-[#DC4492] absolute right-0 top-0 z-[-1]" />
                </div>
                <p className="mt-5"></p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={(transition1, { delay: 0.2 })}
                className="w-11/12"
              >
                <div className="relative h-32">
                  <div className="z-10">
                    <h1 className="h1">03</h1>
                    <p className="h2">Programmer</p>
                  </div>
                  <div className="w-3/4 h-32 bg-[#FDCC49] absolute right-0 top-0 z-[-1]" />
                </div>
                <p className="mt-5"></p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
