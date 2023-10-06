import { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import AnimeImg from "../img/home/anime2.jpg";

class Home extends Component {
  render() {
    return (
      <section className="section">
        <div className="container mx-auto h-full relative">
          {/* text & image wrapper */}
          <div className="flex flex-col justify-center">
            {/* text */}
            <motion.div
              className="mb-96 ml-32 w-auto z-10 absolute flex flex-col justify-center items-start"
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
            >
              <motion.h1 className="h1">
                photographer <br /> & Videographer
              </motion.h1>
              <p className="text-2xl font-primary mb-12">
                Jawa Tengah, Indonesia
              </p>
              <Link to={"/contact"} className="btn mb-[30px]">
                hire me
              </Link>
            </motion.div>
            {/* image */}
            <motion.div
              className="flex justify-end max-h-max"
              initial={{ opacity: 0, y: "20%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={transition1}
                className="relative overflow-hidden max-w-3xl mr-20"
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
