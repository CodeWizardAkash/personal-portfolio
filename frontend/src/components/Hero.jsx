import profilePhoto from "../assets/photo3.png";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import downloadIcon from "../assets/download.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center bg-gradient-to-b from-black via-gray-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Image Section (top on mobile, right on desktop) */}
        <div className="relative flex justify-center items-center md:order-2">
          {/* Glow */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-blue-500/20 blur-3xl"></div>

          {/* Image */}
          <img
            src={profilePhoto}
            alt="Akash Majhi"
            className="relative w-56 sm:w-64 md:w-72 lg:w-80 drop-shadow-2xl"
          />

          {/* Smoke / fade */}
          <div className="absolute bottom-0 w-64 sm:w-72 md:w-80 h-28 bg-gradient-to-t from-black via-black/75 to-transparent blur-sm"></div>
        </div>

        {/* Text Content */}
        <div className="md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-500">Akash</span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-300">
            MERN Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build modern, responsive, and scalable web applications using the
            MERN stack, with a strong focus on performance, clean architecture,
            and user experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-blue-500 rounded-xl hover:bg-blue-500/10 transition"
            >
              <img src={downloadIcon} alt="Download Resume" className="w-5 h-5" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 justify-center md:justify-start text-gray-400">
            <a
              href="https://github.com/CodeWizardAkash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-majhi-212b1128b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.youtube.com/@talesOfAkash"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaYoutube size={24} />
            </a>

            <a
              href="https://leetcode.com/u/AkashMajhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              {/* LeetCode SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z" />
                <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
