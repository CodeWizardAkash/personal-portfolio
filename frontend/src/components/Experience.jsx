const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="relative border border-gray-800 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-gray-950 to-black hover:border-blue-500/50 transition">
          
          {/* Role */}
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-500">
            AI / ML Intern
          </h3>

          {/* Organization */}
          <p className="mt-1 text-gray-300 font-medium">
            :contentReference[oaicite:0]{index=0}
          </p>

          {/* Duration */}
          <p className="mt-1 text-sm text-gray-400">
            Summer Internship · 2024
          </p>

          {/* Description */}
          <ul className="mt-4 list-disc list-inside text-gray-400 space-y-2">
            <li>
              Worked on AI/ML concepts with hands-on exposure to data-driven
              problem solving.
            </li>
            <li>
              Gained practical experience in model development, data preprocessing,
              and performance evaluation.
            </li>
            <li>
              Collaborated with mentors and peers in an academic research-oriented
              environment.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
