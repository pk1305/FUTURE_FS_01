import { ExternalLink } from "lucide-react";

export default function InternshipCard({ internship }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={internship.logo}
          alt={internship.company}
          className="w-14 h-14 object-contain"
        />
        <div>
          <h3 className="text-lg font-semibold">{internship.role}</h3>
          <p className="text-sm text-gray-600">{internship.company}</p>
          <p className="text-xs text-gray-500">{internship.duration}</p>
        </div>
      </div>

      <p className="text-sm text-gray-700">
        {internship.description}
      </p>

      <ul className="flex flex-wrap gap-2">
        {internship.highlights.map((item, index) => (
          <li
            key={index}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full"
          >
            {item}
          </li>
        ))}
      </ul>

      <a
        href={internship.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:underline"
      >
        View Certificate <ExternalLink size={16} />
      </a>
    </div>
  );
}
