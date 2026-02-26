import profileImg from "../assets/profile1.jpeg";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Blender",
    "Unity",
  ];

  const timeline = [
    {
      year: "2023 – Present",
      title: "B.Tech Student",
      desc: "Pursuing Engineering while exploring full-stack development, game creation, and 3D animation.",
    },
    {
      year: "2024",
      title: "Ethical Hacking Training",
      desc: "Completed Ethical Hacking & Penetration Testing training from C-DAC, Noida.",
    },
    {
      year: "2025",
      title: "MERN Stack Journey",
      desc: "Started building real-world MERN projects including a dynamic portfolio and admin dashboard.",
    },
    {
      year: "Summer 2025",
      title: "AI/ML Intern – NIT Jamshedpur",
      desc: "Completed a summer internship in Artificial Intelligence and Machine Learning at NIT Jamshedpur, working on ML models, data preprocessing, and real-world problem-solving.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Profile Image */}
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative animate-float group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-2xl opacity-30 group-hover:opacity-50 transition"></div>

            {/* Image */}
            <img
              src={profileImg}
              alt="Akash Profile"
              className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full object-cover 
                 border-4 border-blue-500 
                 transition-transform duration-300 
                 group-hover:scale-105"   
            />
          </div>
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I’m Akash, a MERN stack developer focused on building interactive and scalable web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            As a third-year engineering student, I work with creative technologies including AI/ML, 3D design, and game development to build visually engaging and interactive web experiences.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mb-4">Skills & Tools</h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gray-800 text-sm hover:bg-blue-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Timeline */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-8">
            My <span className="text-blue-500">Journey</span>
          </h3>

          <div className="relative border-l border-gray-700 pl-6 space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <span className="absolute -left-[20px] top-1 w-4 h-4 bg-blue-500 rounded-full"></span>

                <p className="text-sm text-gray-400">{item.year}</p>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
