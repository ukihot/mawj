import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import ScenarioList from "../islands/ScenarioList.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <label class="relative inline-flex items-center mr-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" checked />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Green
          </span>
        </label>

        <label class="relative inline-flex items-center mr-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" checked />
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
          </div>
          <span class="ml-3 text-sm font-medium  dark:text-gray-300">
            Purple
          </span>
        </label>
      </div>

      <ScenarioList />
    </>
  );
}
