import React, { createContext, useContext, useState } from "react";

interface ThemeContextProps {
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
  children?: React.ReactNode; // Agrega children a la interfaz
}

const ThemeContext = createContext<ThemeContextProps>({
  colorMode: 'dark',
  toggleColorMode: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { // Tipado explícito de children
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');

  const toggleColorMode = () => {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Tipado explícito del valor del contexto
  const value: ThemeContextProps = { 
    colorMode,
    toggleColorMode,
    children,
  };

  return (
    <ThemeContext.Provider value={value}> 
      {children} 
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

// Exporta el Provider y el hook useTheme como propiedades del componente
const ThemeContextComponent = {
  Provider: ThemeProvider,
  useTheme: useTheme,
};

export default ThemeContextComponent; 