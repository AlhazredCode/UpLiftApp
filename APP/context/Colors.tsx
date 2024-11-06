// Colors.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import ThemeContextComponent from './ThemeContext';

export interface ColorPalette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  info: string;
  error: string;
  UpBackground100: string;
  UpBackground200: string;
  UpBackground300: string;
  UpBackground400: string;
  UpBackground500: string;
  UpPrimary: string;
  UpPrimary100: string;
  UpPrimary200: string;
  UpPrimary300: string;
  UpPrimary400: string;
  UpPrimary500: string;
  UpSecondary: string;
  UpSecondary100: string;
  UpSecondary200: string;
  UpSecondary300: string;
  UpSecondary400: string;
  UpSecondary500: string;
}


export const palette = {
  primary: '#4A44BC',
  secondary: '#F63E33',
};

export const statusColors = {
  success: '#44C45B',
  warning: '#FFC107',
  info: '#00BCD4',
  error: '#F44336',
};

const upColors = {
  light: {
    UpBackground100: '#FFFFFF',
    UpBackground200: '#F2F2F2',
    UpBackground300: '#E6E6E6',
    UpBackground400: '#D9D9D9',
    UpBackground500: '#CCCCCC',
    UpPrimary: '#E20000', 
    UpPrimary100: '#C10000', 
    UpPrimary200: '#A10000',
    UpPrimary300: '#800000',
    UpPrimary400: '#600000',
    UpPrimary500: '#400000',
    UpSecondary: '#00008B',
    UpSecondary100: '#1919A3',
    UpSecondary200: '#3333B9',
    UpSecondary300: '#4C4CCD',
    UpSecondary400: '#6666E0',
    UpSecondary500: '#7F7FF3', 
  },
  dark: {
    UpBackground100: '#141414',
    UpBackground200: '#1B1B1B',
    UpBackground300: '#232323',
    UpBackground400: '#2B2B2B',
    UpBackground500: '#333333',
    UpPrimary: '#E20000',
    UpPrimary100: '#EA2424',
    UpPrimary200: '#EC4949',
    UpPrimary300: '#ED6D6D',
    UpPrimary400: '#EF9292',
    UpPrimary500: '#F1B6B6', 
    UpSecondary: '#00008B', 
    UpSecondary100: '#6666E0',
    UpSecondary200: '#7F7FF3',
    UpSecondary300: '#9999FF',
    UpSecondary400: '#B2B2FF',
    UpSecondary500: '#CCCCFF',
  }
};



// Exportar la función getColorPalette
export const getColorPalette = (colorMode: 'light' | 'dark'): ColorPalette => {
  return {
    ...palette,
    ...statusColors,
    ...upColors[colorMode],
  };
};



let colorPalette: ColorPalette = getColorPalette('dark'); // Inicializa con 'dark'

const Colors: React.FC = () => {
  const { colorMode } = ThemeContextComponent.useTheme();

  useEffect(() => {
    colorPalette = getColorPalette(colorMode); // Actualiza colorPalette directamente
  }, [colorMode]);

  return null;
};


export { colorPalette }; 
export default Colors;