import { PropTypes } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

const themeContextDefaultData = {
  theme: "primary" as PropTypes.Color,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextDefault>(
  themeContextDefaultData
);

const ThemeContextProvider = (props: ThemeContextProps) => {
  const { children } = props;
  const [theme, setTheme] = useState(themeContextDefaultData.theme);
  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);
  const themContextDynamicData = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themContextDynamicData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
