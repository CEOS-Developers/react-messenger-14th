import { useState } from "react";

export default function useBool(boolProps: boolean = true) {
  const [bool, setBool] = useState<boolean>(boolProps);

  function onToggle(): void {
    setBool(!bool);
  }

  return { bool, onToggle };
}
