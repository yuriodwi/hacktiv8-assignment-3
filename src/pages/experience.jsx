import { Component } from "react";
import Anime1 from "../img/experience/anime1.jpg";
import Anime2 from "../img/experience/anime2.jpg";
import Anime3 from "../img/experience/anime3.jpg";
import Anime4 from "../img/experience/anime4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";

class Experience extends Component {
  render() {
    return (
      <motion.section className="section">
        <div className="container mx-auto h-full relative">
          {/* text & image wrapper */}
          <div className="flex flex-row h-full items-center justify-start gap-x-10 text-right pt-24 ">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: "-30%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
              className="flex flex-col items-end"
            >
              <h1 className="h1">Experience</h1>
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
              <Link to={"/contact"} className="btn mb-[30px]">
                Hire me
              </Link>
            </motion.div>
            {/* image grid */}
            <motion.div
              initial={{ opacity: 0, y: "40%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
              className="grid grid-cols-2 gap-2"
            >
              {/* image */}
              <div className="max-w-[320px] h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime1}
                  alt=""
                />
              </div>
              <div className="max-w-[320px] h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime2}
                  alt=""
                />
              </div>
              <div className="max-w-[320px] h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime3}
                  alt=""
                />
              </div>
              <div className="max-w-[320px] h-[220px] bg-accent overflow-hidden">
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime4}
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }
}

export default Experience;