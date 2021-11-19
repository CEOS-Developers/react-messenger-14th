import { useState } from "react";

export default function useInput(initialValue = "") {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, setValue, onChange };
}
