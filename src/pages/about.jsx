import { Component } from "react";
import AnimeImg from "../img/about/anime4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";

class About extends Component {
  render() {
    return (
      <section className="section">
        <div className="container mx-auto h-full relative">
          {/* text & image wrapper */}
          <motion.div
            initial={{ opacity: 0, y: "20%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition1}
            className="flex flex-row h-full items-center justify-center gap-10 text-left pt-24"
          >
            {/* image */}
            <div className="flex-1 max-w-[450px] order-none overflow-hidden ml-32">
              <img src={AnimeImg} alt="" />
            </div>
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: "-60%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
              className="flex-1 pb-14 w-auto z-10 flex flex-col justify-center items-start"
            >
              <h1 className="h1">About me</h1>
              <p className="mb-12 max-w-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit tempore rem alias repellat sit, qui mollitia odit{" "}
                <b>cumque explicabo </b>
                quae? Quisquam facilis adipisci repellat fugiat quae id
                perferendis molestiae dicta?
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                consequatur, nostrum eaque expedita iure animi praesentium
                commodi ipsam. Quo, repellendus.
              </p>
              <Link to={"/portfolio"} className="btn">
                View my work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
}

export default About;
