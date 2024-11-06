// useColors.tsx
import { useState, useEffect } from 'react';
import { colorPalette, ColorPalette } from './Colors';

export const useColors = (): ColorPalette => {
  const [colors, setColors] = useState<ColorPalette>(colorPalette);

  useEffect(() => {
    setColors(colorPalette); // Actualiza el estado cuando colorPalette cambia
  }, [colorPalette]);

  return colors;
};