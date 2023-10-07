import { Component } from "react";
import InterestVid from "../vid/interest/interest.mp4";
import InterestImg from "../img/interest/interest.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
class Interest extends Component {
  render() {
    return (
      <section className="section">
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col h-full justify-center items-center pt-20">
            {/* photo & videograper */}
            <div className="flex flex-row justify-center items-center gap-x-10">
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition1}
                className="max-w-[400px] h-[220px] overflow-hidden"
              >
                <video
                  src={InterestVid}
                  controls
                  autoPlay
                  muted
                  loop
                  className="object-cover"
                ></video>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "30%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition1}
                className="flex flex-col w-1/3 items-start text-start justify-start w-[550px] "
              >
                <h1 className="h3">
                  Photographer
                  <br />& Videographer
                </h1>
                <p className="mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  enim rem rerum est,
                </p>
              </motion.div>
            </div>
            {/* programmer */}
            <div className="flex flex-row justify-center items-center gap-x-10 mt-10">
              <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={(transition1, { delay: 0.1 })}
                className="max-w-[400px] h-[220px] overflow-hidden"
              >
                <img src={InterestImg} alt="" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "30%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={(transition1, { delay: 0.1 })}
                className="flex flex-col w-1/3 items-start text-start justify-start w-[550px]"
              >
                <h1 className="h3">Programmer</h1>
                <p className="mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  enim rem rerum est, nisi laudantium unde illum. Eum, similique
                  aspernatur explicabo voluptate,
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Interest;
