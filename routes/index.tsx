import { useState } from "preact/hooks";
import ScenarioList from "../islands/ScenarioList.tsx";
import { EntryForm } from "../islands/EntryForm.tsx";
import { Switch } from "../components/Switch.tsx";

export interface Scenario {
  code: number;
  scenario: string;
  isSuccess: boolean;
}

export default function Home() {
  const [isSuccess, setIsSuccess] = useState<boolean>(true); // State for isSuccess prop

  const options: Scenario[] = [
    { code: 0, scenario: "Empty", isSuccess: true },
    { code: 1, scenario: "Hand Touch", isSuccess: true },
    { code: 2, scenario: "Escape", isSuccess: true },
    { code: 3, scenario: "Low Kick", isSuccess: true },
    { code: 4, scenario: "High Kick", isSuccess: true },
    { code: 5, scenario: "Lion Jump", isSuccess: true },
    { code: 6, scenario: "Dubki", isSuccess: true },
    { code: 7, scenario: "Only Bonus", isSuccess: true },
    { code: 8, scenario: "Pursuit", isSuccess: true },
    { code: 9, scenario: "Tackle", isSuccess: false },
    { code: 10, scenario: "Counter", isSuccess: false },
    { code: 11, scenario: "Ancle Catch", isSuccess: false },
  ];

  return (
    <>
      <Switch
        checked={isSuccess}
        defaultChecked={true}
        setIsSuccess={setIsSuccess}
      />
      <EntryForm />
      <ScenarioList options={options} isSuccess={isSuccess} />
    </>
  );
}
