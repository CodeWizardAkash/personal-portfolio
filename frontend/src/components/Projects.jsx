const Projects = () => {
  const projects = [
    {
      title: "Cube Runner Game",
      desc: "A simple endless runner game built with Unity and C#.",
      tech: ["Unity", "C#", "Game Dev"],
      github: "https://github.com/CodeWizardAkash/Red-Cube-Game.git",
      live: "#"
    },
    // {
    //   title: "JWOC Frontend Project",
    //   desc: "A frontend contribution project with clean UI and reusable components.",
    //   tech: ["React", "Tailwind"],
    //   github: "#",
    //   live: "#"
    // },
    // {
    //   title: "3D Animation Work",
    //   desc: "Creative 3D animations and models designed using Blender.",
    //   tech: ["Blender", "3D"],
    //   github: "#",
    //   live: "#"
    // },
    {
      title: "Book Store",
      desc: "Creative 3D animations and models designed using Blender.",
      tech: ["React", "Tailwind","node.js","MongoDB","express"],
      github: "https://github.com/CodeWizardAkash/Book-Store.git",
      live: "#"
    },
    {
      title: "Bubble Game",
      desc: "simple and interactive web-based game where players pop bubbles within a countdown timer to score points. 🎯",
      tech: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/CodeWizardAkash/Bubble-Game.git",
      live: "#"
    }
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-gray-800 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="text-blue-400 hover:underline"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
