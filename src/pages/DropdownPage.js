import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "River", value: "river" },
    { label: "Lake", value: "lake" },
    { label: "Sea", value: "sea" },
    { label: "Ocean", value: "ocean" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
