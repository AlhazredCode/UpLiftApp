// useColors.tsx
import ThemeContextComponent from './ThemeContext';
import { ColorPalette, palette, statusColors, grayScale } from './Colors'; // Importar ColorPalette

const useColors = (): ColorPalette => {
  const { colorMode } = ThemeContextComponent.useTheme();

  const grays = colorMode === 'dark' ? grayScale : grayScale.reverse();

  return {
    ...palette,
    ...statusColors,
    gray0: grays[0], // Añadir gray0
    gray1: grays[1],
    gray2: grays[2],
    gray3: grays[3],
    gray4: grays[4],
    gray5: grays[5],
    gray6: grays[6],
    gray7: grays[7],
    gray8: grays[8], // Añadir gray8
  };
};

export default useColors;