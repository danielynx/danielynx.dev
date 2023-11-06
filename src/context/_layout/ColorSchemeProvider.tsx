'use client';

import React, {
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
  SetStateAction,
  Dispatch,
  useEffect,
  useCallback,
} from 'react';

import { ColorSchemeEnum } from '@/type/_layout/ColorSchemeEnum';
import { useBrowserColorScheme } from '@/hook/_layout/useBrowserColorScheme';
import { useLocalStorage } from '@/hook/useLocalStorage';

type FunctionSetColorScheme = Dispatch<
  SetStateAction<ColorSchemeEnum | undefined>
>;

interface ColorSchemeContextType {
  colorScheme: ColorSchemeEnum | undefined;
  setColorScheme: FunctionSetColorScheme;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(
  undefined,
);

function ColorSchemeProvider({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState<boolean>(false);

  const { storageValue, setStorageValue } =
    useLocalStorage<ColorSchemeEnum>('color-scheme');

  const [colorScheme, setColorSchemeInternal] = useState<
    ColorSchemeEnum | undefined
  >(storageValue);

  const {
    colorScheme: browserColorScheme,
    skipState: browserSkipState,
    triggeredEvent: browserTriggeredEvent,
  } = useBrowserColorScheme();

  const setColorScheme = useCallback<FunctionSetColorScheme>(
    value => {
      let newState = value;

      if (typeof value === 'function') {
        const fn = value;
        const prevState = colorScheme;

        newState = fn(prevState);
      }

      setColorSchemeInternal(newState);
      setStorageValue(newState);
    },
    [colorScheme, setStorageValue, setColorSchemeInternal],
  );

  if ((!colorScheme && !browserSkipState) || browserTriggeredEvent) {
    setColorScheme(browserColorScheme);
  }

  const value = useMemo<ColorSchemeContextType>(
    () => ({ colorScheme, setColorScheme }),
    [colorScheme, setColorScheme],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ColorSchemeContext.Provider value={value}>
      {mounted ? (
        <div className={colorScheme === ColorSchemeEnum.DARK ? 'dark' : ''}>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </ColorSchemeContext.Provider>
  );
}

export { ColorSchemeContext, ColorSchemeProvider, type ColorSchemeContextType };
