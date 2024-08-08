// src/components/SimulationTest.tsx

"use client";

import { useState } from "react";

export default function SimulationTest() {
  const [numSimulations, setNumSimulations] = useState<number>(1000);
  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (numSimulations <= 0) {
      setError("Number of simulations must be greater than 0.");
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ numSimulations }),
      });
      const data = await res.json();
      setResult(JSON.parse(data.result)); // Parsing the JSON string into an object
    } catch (error) {
      setError("An error occurred while running the simulation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4"> Simulation Testing</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          Number of Simulations:
          <input
            type="number"
            value={numSimulations}
            onChange={(e) => setNumSimulations(parseInt(e.target.value))}
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="px-4 py-2 mt-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          Run Simulation
        </button>
      </form>

      {loading && (
        <div className="text-center">
          <p className="text-blue-500">Running simulation 🪄, please wait...</p>
        </div>
      )}

      {result && (
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Simulation Results</h2>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Risk Level</th>
                <th className="py-2 px-4 border-b">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(result).map(([riskLevel, percentage]) => (
                <tr key={riskLevel}>
                  <td className="py-2 px-4 border-b">{riskLevel}</td>
                  <td className="py-2 px-4 border-b">
                    {(percentage * 100).toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
