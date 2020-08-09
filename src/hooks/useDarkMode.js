import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [useDarkMode, setUseDarkMode] = useLocalStorage("active", true);
  useEffect(() => {
    if (useDarkMode === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [useDarkMode]);
  return [useDarkMode, setUseDarkMode];
};
