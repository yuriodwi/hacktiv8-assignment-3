import { Component } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import AwardsVid from "../vid/awards/awards.mp4";

class Awards extends Component {
  render() {
    return (
      <section className="section">
        <div className="container mx-auto h-full relative pt-16">
          <div className="flex flex-col justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition1}
              className="max-w-full rounded-md overflow-hidden"
            >
              <video src={AwardsVid} controls autoPlay loop></video>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "-60%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={(transition1, { delay: 0.1 })}
              className="justify-center items-center flex flex-col text-center max-w-lg mt-5"
            >
              <h1 className="h1">UI/UX</h1>
              <p className="">
                <b>Winning UI/UX Competition at UNSIQ 2022 </b> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Voluptas, non
                dicta. Quos voluptatem eaque beatae atque, exercitationem eos
                rem, repellat, velit porro sequi aspernatur?
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default Awards;
