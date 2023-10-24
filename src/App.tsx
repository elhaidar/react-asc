import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import { createContext, useEffect, useState } from "react";
import { store } from "./redux/store";

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
    <Provider store={store}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          switchTheme,
        }}
      >
        <AppRouter />
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
