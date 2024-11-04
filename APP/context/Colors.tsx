// Colors.tsx
import ThemeContextComponent from './ThemeContext';

export interface ColorPalette {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  info: string;
  error: string;
  gray0: string; // Nuevo gray0
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
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

// Añadir #000000 a grayScale
export const grayScale: string[] = [
  "#000000", "#121212", "#ffffff1a", "#ffffff33", "#ffffff4d", "#ffffff80", "#ffffffe6", "#f2f2f2", "#ffffffff"
];

// Exportar la función getColorPalette
export const getColorPalette = (colorMode: 'light' | 'dark'): ColorPalette => {
  const grays = colorMode === 'dark' ? grayScale : grayScale.reverse();

  return {
    ...palette,
    ...statusColors,
    gray0: grays[0], // Asignar gray0
    gray1: grays[1],
    gray2: grays[2],
    gray3: grays[3],
    gray4: grays[4],
    gray5: grays[5],
    gray6: grays[6],
    gray7: grays[7],
    gray8: grays[8],
  };
};

interface ColorsProps {
  colors: ColorPalette;
}

// Inicializar colorPalette con un valor por defecto 
let colorPalette: ColorPalette = getColorPalette('light'); // O 'dark' según tu configuración predeterminada

const Colors: React.FC<ColorsProps> = () => {
  const { colorMode } = ThemeContextComponent.useTheme();

  // Actualizar colorPalette cuando cambia el modo de color
  colorPalette = getColorPalette(colorMode);

  return null;
};

export { colorPalette };

export default Colors; 