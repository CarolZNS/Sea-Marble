import Input from "../components/Input";
import { useState } from "react";

export default function FormPage() {
  const [inputValue, setInputValue] = useState("");
  const [riverValue, setRiverValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const handleChange = (e) => {
    return setInputValue(e.target.value);
  };

  const riverChange = (e) => {
    return setRiverValue(e.target.value);
  };
  
  function maskOnlyNumbers(value) {
    return value.replace(/\D/g, "");
  }
  return (
    <div className="flex flex-row gap-4">
      <Input
        label="Favorite Ocean"
        id="ocean"
        value={inputValue}
        onChange={handleChange}
      />
      <Input
        label="River"
        id="river"
        value={riverValue}
        onChange={riverChange}
        outline
      />
      <Input
        label="Width"
        id="size"
        value={numberValue}
        onChange={(e) => setNumberValue(maskOnlyNumbers(e.target.value))}
      />
    </div>
  );
}
