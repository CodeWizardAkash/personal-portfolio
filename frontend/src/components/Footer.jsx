const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 sm:px-12 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            Akash<span className="text-blue-500">.</span>
          </h3>
          <p className="mt-3 text-sm">
            MERN Stack Developer & 3D Artist creating modern digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Connect
          </h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Akash Majhi. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
