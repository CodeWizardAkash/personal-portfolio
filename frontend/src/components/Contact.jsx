import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // 🔗 Backend will be connected here
      console.log("Form Data:", formData);

      // simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          Have a project idea, internship opportunity, or just want to say hi?
          Feel free to reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let’s build something great 🚀
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I’m open to internships, freelance projects, and collaborations.
              Drop a message and I’ll get back to you as soon as possible.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>
                📧 Email:{" "}
                <span className="text-blue-400">
                  akasmajhi038@gmail.com
                </span>
              </p>
              <p>📍 Location: West Bengal, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-2xl space-y-6 border border-gray-800"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;