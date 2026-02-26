import { useEffect, useState } from "react"

const sections = ["home", "about", "projects", "contact"]

const Navbar = () => {
  const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120

      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight

          if (scrollY >= top && scrollY < top + height) {
            setActive(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (section) =>
    `cursor-pointer transition ${
      active === section
        ? "text-blue-500 font-semibold"
        : "text-gray-300 hover:text-white"
    }`

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Akash<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {sections.map((sec) => (
            <li key={sec}>
              <a href={`#${sec}`} className={linkClass(sec)}>
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 px-6 py-6 space-y-6">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setMenuOpen(false)}
              className={linkClass(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
