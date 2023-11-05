'use client';

import { useCallback, useContext, useMemo } from 'react';

import { ColorSchemeEnum } from '@/type/home/layout/ColorSchemeEnum';
import {
  ColorSchemeContext,
  ColorSchemeContextType,
} from '@/context/home/layout/ColorSchemeProvider';

interface UseColorSchemeType extends ColorSchemeContextType {
  isColorSchemeDark: boolean;
  toggleColorScheme: () => void;
}

function useColorScheme(): UseColorSchemeType {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }

  const { colorScheme, setColorScheme } = context;

  const isColorSchemeDark = useMemo(
    () => colorScheme === ColorSchemeEnum.DARK,
    [colorScheme],
  );

  const toggleColorScheme = useCallback(() => {
    setColorScheme(colorScheme =>
      colorScheme === ColorSchemeEnum.DARK
        ? ColorSchemeEnum.LIGHT
        : ColorSchemeEnum.DARK,
    );
  }, [setColorScheme]);

  return {
    ...context,
    isColorSchemeDark,
    toggleColorScheme,
  };
}

export { useColorScheme, type UseColorSchemeType };
