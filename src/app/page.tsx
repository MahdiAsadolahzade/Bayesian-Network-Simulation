
import SimulationTest from "./components/SimulationTest";
import CodeSnippet from "./components/CodeSnippet";
import SimulationInfo from "./components/SimulationInfo";

export default function Home() {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">🌐 Bayesian Network Simulation</h1>

      <SimulationInfo />

      <SimulationTest />

      <CodeSnippet language="python" />
    </div>
  );
}
