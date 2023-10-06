import { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import AnimeImg from "../img/home/home.jpg";

class Home extends Component {
  render() {
    return (
      <section className="section">
        <div className="container mx-auto h-full relative">
          <div className="flex flex-row h-full items-center justify-between">
            {/* text */}
            <motion.div
              className="ml-72 mt-20 mx-auto z-10 absolute flex flex-col justify-end items-start"
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
            >
              <h1 className="h1">
                {`Hey i'm`} <br /> Yurio Dwi LS
              </h1>
              <p className="text-2xl font-primary mb-12">
                Jawa Tengah, Indonesia
              </p>
              <Link to={"/contact"} className="btn mb-[30px]">
                hire me
              </Link>
            </motion.div>
            {/* image */}
            <motion.div
              className="flex justify-end mx-auto"
              initial={{ opacity: 0, y: "20%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={transition1}
                className="ml-36 mt-[350px] overflow-hidden max-w-2xl items-start"
              >
                <img src={AnimeImg} alt="" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
