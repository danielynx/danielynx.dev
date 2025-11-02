'use client';

import { useSyncExternalStore, useState, useEffect } from 'react';

import { ColorSchemeEnum } from '@/type/_layout/ColorSchemeEnum';

const COLOR_QUERY = '(prefers-color-scheme: dark)';

function hasMatchMedia(): boolean {
  return (
    typeof globalThis !== 'undefined' && globalThis.matchMedia !== undefined
  );
}

// The subscription setup
function subscribe(onPrefersColorSchemeChange: () => void) {
  if (!hasMatchMedia()) {
    return () => {};
  }

  const mediaQueryList = globalThis.matchMedia(COLOR_QUERY);

  // Add listener for color scheme changes
  mediaQueryList.addEventListener('change', onPrefersColorSchemeChange);

  // Return cleanup function
  return () =>
    mediaQueryList.removeEventListener('change', onPrefersColorSchemeChange);
}

// Get current value (client-side)
function getSnapshot(): ColorSchemeEnum {
  if (!hasMatchMedia()) return ColorSchemeEnum.LIGHT;

  return globalThis.matchMedia(COLOR_QUERY).matches
    ? ColorSchemeEnum.DARK
    : ColorSchemeEnum.LIGHT;
}

const getServerSnapshot = () => ColorSchemeEnum.LIGHT;

function useBrowserColorScheme(): ColorSchemeEnum {
  const [client, setClient] = useState(false);

  const colorScheme = useSyncExternalStore<ColorSchemeEnum>(
    subscribe,
    client ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClient(true);
  }, []);

  return colorScheme;
}

export { useBrowserColorScheme };
