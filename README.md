# Bayesian Network Simulation Web App

This project is a web application that simulates a Bayesian Network for a smart home IoT network. The simulation helps assess the risk levels based on the impact of various sensors being compromised. The application is built with Next.js (TypeScript) and uses a Python script for the simulation logic.

## Features

- Run Bayesian Network simulations with customizable parameters.
- View simulation results in a user-friendly table.
- Display code snippets with syntax highlighting.
- Provide information about the simulation and its purpose.

## Project Structure

- `src/app/page.tsx`: Main entry point of the application.
- `src/components/SimulationTest.tsx`: Component handling simulation form, submission, and result display.
- `src/components/CodeSnippet.tsx`: Component for displaying code snippets with syntax highlighting.
- `src/components/SimulationInfo.tsx`: Component providing information about the simulation.
- `simulate.py`: Python script containing the simulation logic.

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Ensure Python is installed:** 

   Make sure Python 3.x is installed on your system. You can download it from [Python's official website](https://www.python.org/downloads/).

4. **Install Python dependencies:**

    ```bash
    pip install numpy pandas
    ```

## Running the Application

1. **Start the Next.js development server:**

    ```bash
    npm run dev
    ```

   This will start the Next.js server at `http://localhost:3000`.

2. **Run the Python script separately:**

    You can manually run the `simulate.py` script if needed, but the application will handle it automatically via the API route.

## API Routes

- **`/api/simulate` (POST)**: 
  - **Description**: Runs the Bayesian Network simulation.
  - **Request Body**: `{ "numSimulations": number }`
  - **Response**: JSON object with simulation results.

## Components

- **`SimulationTest`**: Handles the simulation form, submission, loading state, and displays results.
- **`CodeSnippet`**: Displays a code snippet with syntax highlighting using Prism.js.
- **`SimulationInfo`**: Provides information about the simulation, including its purpose and details.

## Example

### Running a Simulation

1. Enter the number of simulations in the input field.
2. Click the "Run Simulation" button.
3. View the results in the table format below the form.

### Viewing Code

The `CodeSnippet` component displays the simulation code with syntax highlighting. The Python code snippet is included for reference.

## Troubleshooting

- **Syntax Highlighting Issues**: Ensure that the Prism.js styles and scripts are correctly loaded.
- **Python Script Errors**: Check Python installation and ensure required libraries (`numpy`, `pandas`) are installed.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes or feature requests, please open an issue first to discuss.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
