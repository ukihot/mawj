import { Scenario } from "../routes/index.tsx";

interface ScenarioListProps {
  options: Scenario[];
  isSuccess: boolean;
}

export default function ScenarioList(
  { options, isSuccess }: ScenarioListProps,
) {
  const filteredOptions = options.filter((option) =>
    option.isSuccess === isSuccess
  );

  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Scenario
      </h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {filteredOptions.map((option) => (
          <li
            key={option.code}
            className={`w-full border-b ${
              option.code === filteredOptions[0].code ? "rounded-t-lg" : ""
            } border-gray-200 ${
              option.code === filteredOptions[filteredOptions.length - 1].code
                ? "rounded-b-lg"
                : ""
            } dark:border-gray-600`}
          >
            <div className="flex items-center pl-3">
              <input
                id={`list-radio-${option.code}`}
                type="radio"
                value={option.code.toString()}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`list-radio-${option.code}`}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option.scenario}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
