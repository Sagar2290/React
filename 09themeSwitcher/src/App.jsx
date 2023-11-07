import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="flex flex-wrap">
            <div className="max-w-sm mx-auto mb-5">
              <Card
                title="Front-End Development"
                price={599}
                img="https://wallpapercave.com/wp/wp9641823.jpg"
              />
            </div>
            <div className="max-w-sm mx-auto mb-5">
              <Card
                title="Back-End Development"
                price={699}
                img="https://wallpapercave.com/wp/wp11543666.jpg"
              />
            </div>
            <div className="max-w-sm mx-auto">
              <Card
                title="FullStack Development"
                price={1199}
                img="https://wallpapercave.com/wp/wp10167056.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
