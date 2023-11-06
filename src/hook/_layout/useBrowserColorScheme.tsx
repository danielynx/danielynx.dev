'use client';

import { useRef, useSyncExternalStore } from 'react';

import { ColorSchemeEnum } from '@/type/_layout/ColorSchemeEnum';

interface UseBrowserColorSchemeType {
  colorScheme: ColorSchemeEnum;
  skipState: boolean;
  triggeredEvent: boolean;
}

function subscribe(onStoreChange: { (): void }) {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', onStoreChange);

  return () => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onStoreChange);
  };
}

function getSnapshot(): ColorSchemeEnum {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ColorSchemeEnum.DARK
    : ColorSchemeEnum.LIGHT;
}

function getServerSnapshot(): ColorSchemeEnum {
  return ColorSchemeEnum.LIGHT;
}

function useBrowserColorScheme(): UseBrowserColorSchemeType {
  const currentState =
    typeof window !== 'undefined' ? getSnapshot() : undefined;

  const previousState = useRef<ColorSchemeEnum | undefined>(undefined);

  const time = useRef(0);
  time.current++;

  const colorScheme = useSyncExternalStore<ColorSchemeEnum>(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const skipState = currentState !== colorScheme;

  const triggeredEvent =
    time.current > 1 && currentState !== previousState.current;

  previousState.current = currentState;

  return { colorScheme, skipState, triggeredEvent };
}

export { useBrowserColorScheme, type UseBrowserColorSchemeType };
