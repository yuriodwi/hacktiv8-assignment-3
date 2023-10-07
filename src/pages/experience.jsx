import { Component } from "react";
import Anime1 from "../img/experience/experience1.jpg";
import Anime2 from "../img/experience/experience2.jpg";
import Anime3 from "../img/experience/experience3.jpg";
import Anime4 from "../img/experience/experience4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";

class Experience extends Component {
  render() {
    return (
      <section className="section">
        <div className="container mx-auto h-full relative">
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
            <div className="grid grid-cols-2 gap-2">
              {/* image */}
              <motion.div
                initial={{ opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={(transition1, { delay: 0.05 })}
                className="max-w-[320px] h-[220px] bg-accent overflow-hidden"
              >
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime1}
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={(transition1, { delay: 0.1 })}
                className="max-w-[320px] h-[220px] bg-accent overflow-hidden"
              >
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime2}
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={(transition1, { delay: 0.15 })}
                className="max-w-[320px] h-[220px] bg-accent overflow-hidden"
              >
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime3}
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={(transition1, { delay: 0.2 })}
                className="max-w-[320px] h-[220px] bg-accent overflow-hidden"
              >
                <img
                  className="object-cover h-[220px] hover:scale-110 transition-all duration-500"
                  src={Anime4}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
