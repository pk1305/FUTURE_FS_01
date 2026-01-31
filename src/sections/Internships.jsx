import internships from "../data/internships";

export default function Internships() {
  return (
    <section id="internships" className="py-16 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Internships
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {internships.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-green-400 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.logo}
                alt={item.company}
                className="w-14 h-14 object-contain bg-white rounded p-1"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  {item.company}
                </h3>
                <p className="text-green-400 text-sm">
                  {item.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-2">
              {item.duration}
            </p>

            <p className="text-gray-300 text-sm mb-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.highlights.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={item.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-green-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
