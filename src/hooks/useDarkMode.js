import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("active", true);
  useEffect(() => {
    if (someValue === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [someValue]);
  return [someValue, setSomeValue];
};
