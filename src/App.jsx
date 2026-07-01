import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  const employees = [
    { id: 1, name: "Ahmed Ali", role: "Frontend Developer" },
    { id: 2, name: "Sara Mohammed", role: "UI/UX Designer" },
    { id: 3, name: "Omar Khalid", role: "Project Manager" },
    { id: 4, name: "Lina Hassan", role: "Backend Developer" },
    { id: 5, name: "Nora Saeed", role: "Data Analyst" },
    { id: 6, name: "Faisal Abdullah", role: "Cybersecurity Specialist" },
  ];

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">

      <h1 className="text-4xl font-bold text-white text-center mb-8">
        👥 Employee Directory
      </h1>

      <div className="flex justify-center mb-8">
        <input
          className="w-full max-w-md p-3 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-white"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(emp => (
          <div
            key={emp.id}
            className="bg-white/90 p-5 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {emp.name}
            </h2>
            <p className="text-gray-600">{emp.role}</p>
          </div>
        ))}
      </div>

    </div>
  );
}