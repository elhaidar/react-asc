import AppRouter from "./router/AppRouter";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeContext: any = createContext(null);

function App() {
  const [currentTheme, setCurrentTheme] = useState(false);
  const switchTheme = () => {
    setCurrentTheme(!currentTheme);
    localStorage.currentTheme = !currentTheme;
  };

  useEffect(() => {
    try {
      setCurrentTheme(JSON.parse(localStorage.currentTheme));
    } catch (error) {
      setCurrentTheme(true);
      localStorage.currentTheme = true;
    }
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        switchTheme,
      }}
    >
      <AppRouter />
    </ThemeContext.Provider>
  );
}

export default App;
