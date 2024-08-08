import React from "react";

export default function SimulationInfo() {
  return (
    <div className="w-full mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Bayesian Network Simulation Overview
      </h2>
      <p className="mb-4 text-gray-700">
        This project involves simulating a Bayesian Network within the context
        of a smart home IoT system. A Bayesian Network is a probabilistic
        graphical model that represents a set of variables and their conditional
        dependencies using a directed acyclic graph (DAG).
      </p>

      <h3 className="text-xl font-semibold mb-3">Purpose of the Simulation</h3>
      <p className="mb-4 text-gray-700">
        The simulation is designed to model the risk of different sensors in a
        smart home environment being compromised by an attack. It evaluates how
        likely it is that certain events (like a burglar alarm being triggered)
        might occur given the state of other connected sensors. By running
        multiple simulations, we can estimate the overall risk level of the
        system and assess its vulnerability.
      </p>

      <h3 className="text-xl font-semibold mb-3">
        What Does the Python Script Do?
      </h3>
      <p className="mb-4 text-gray-700">
        The Python script,{" "}
        <code className="bg-gray-200 p-1 rounded">simulate.py</code>, performs
        the following steps:
      </p>
      <ol className="list-decimal list-inside mb-4 text-gray-700">
        <li>
          **Define the Bayesian Network Structure**: The script starts by
          defining the structure of the Bayesian Network, where nodes represent
          sensors like the Burglar Alarm, Motion Sensor, Door Sensor, etc.
        </li>
        <li>
          **Set Conditional Probabilities**: For each sensor, the script defines
          the probability of it being triggered given the state of its parent
          nodes.
        </li>
        <li>
          **Simulate Attacks**: It randomly selects a subset of sensors to be
          compromised, simulating an attack on the smart home system.
        </li>
        <li>
          **Calculate Impact**: Based on the compromised sensors, the script
          calculates the total impact on the system using predefined impact
          values.
        </li>
        <li>
          **Assess Risk Level**: The script determines the risk level (High,
          Medium, Low) based on the total calculated impact compared to
          predefined risk thresholds.
        </li>
        <li>
          **Aggregate Results**: Finally, the script runs this process for a
          large number of simulations (e.g., 1000) and aggregates the results to
          understand the overall risk distribution.
        </li>
      </ol>

      <h3 className="text-xl font-semibold mb-3">
        Why This Simulation is Important
      </h3>
      <p className="mb-4 text-gray-700">
        In real-world applications, understanding the vulnerabilities and risks
        associated with interconnected devices is critical. This simulation
        helps in identifying potential weak points in a smart home setup and
        provides insights on how to enhance security measures.
      </p>

      <h3 className="text-xl font-semibold mb-3">How to Use This Simulation</h3>
      <p className="text-gray-700">
        You can run the simulation directly from this web interface by
        specifying the number of simulations you'd like to perform. The results
        will give you a detailed analysis of the risk levels across different
        scenarios.
      </p>
    </div>
  );
}
