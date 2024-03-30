import React from "react";
import Img from "../assets/Images/logo.webp";
import { FaLink, FaYoutube, FaInstagram } from "react-icons/fa";
import { Reveal } from "./Reveal";
const Footer = () => {
  return (
    <div>
      <footer className="text-white">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
            <path
              fill="#46830d"
              fill-opacity="1"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="background grid lg:grid-cols-3 px-10 lg:px-20 py-5 pb-10 justify-items-center">
            <Reveal>
              <div className="hidden lg:flex flex-col gap-5">
                <h2 className="text-3xl text-gradient">CreScencE</h2>
                <img src={Img} alt="" className="h-[126px] w-[126px]" />
              </div>
            </Reveal>
            <Reveal>
              <div className="flex flex-col lg:gap-2 pb-20 lg:pb-0 pt-5 lg:pt-0 justify-items-center items-center">
                <h2 className="text-3xl text-white">Contact Us</h2>
                <p className="text-gray-300"> +91 8500991372</p>
                <a
                  href="mailto:cresence2k24@gmail.com"
                  target="blank"
                  className="text-gray-300"
                >
                  crescence2k24@gmail.com
                </a>
                <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                  <a
                    href="https://www.youtube.com/channel/UCsv1TRqSqxKVeip7yUsqLRw"
                    target="_blank_"
                  >
                    <FaYoutube />
                  </a>
                  <a href="https://jntuhcej.ac.in/" target="_blank_">
                    <FaLink />
                  </a>
                  <a
                    href="https://www.instagram.com/crescence_2k24?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank_"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="hidden lg:flex flex-col gap-5 pt-5 lg:pt-0">
                <h2 className="text-3xl">Location</h2>
                <p className="text-gray-300">
                  JNTUH-UCEJ,
                  <br /> Kondagattu,
                  <br /> Jagtial,
                  <br /> Telangana <br /> 505501
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
