import React from "react";
import aboutImg1 from "../assets/about1.png";
import aboutImg2 from "../assets/about2.png";

import { motion } from "framer-motion"
import {fadeIn} from '../variants';

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div 
        variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}}
        className="md:w-1/2">
          <img src={aboutImg1} alt="" />
        </motion.div>
        {/* about content */}
        <motion.div
        variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}}
        className="md:w-2/5">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span></h2>
            <p className="text-tartiary text-lg mb-7">A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live ini Indonesia</p>
            <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
        
      {/* 2nd parts */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div 
        variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}}
        className="md:w-1/2">
          <img src={aboutImg2} alt="" />
        </motion.div>
        {/* about content */}
        <motion.div 
        variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.7}}
        className="md:w-2/5">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">You can Practice at any time convinent for you <span className="text-secondary">time convinent for you.</span></h2>
            <p className="text-tartiary text-lg mb-7">A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live ini Indonesia</p>
            <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
