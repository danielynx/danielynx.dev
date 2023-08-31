'use client';

import { useState, useEffect, SetStateAction, Dispatch } from 'react';

interface UseLocalStorageType<T> {
  storageValue: T;
  setStorageValue: Dispatch<SetStateAction<T>>;
}

function getStorageValue<T>(key: string): T | undefined {
  if (typeof localStorage === 'undefined') {
    return undefined;
  }

  const saved = localStorage.getItem(key);

  return !!saved ? JSON.parse(saved) : undefined;
}

function useLocalStorage<T>(key: string): UseLocalStorageType<T | undefined> {
  const [storageValue, setStorageValue] = useState<T | undefined>(
    getStorageValue(key),
  );

  useEffect(() => {
    if (typeof storageValue === 'undefined') {
      localStorage?.removeItem(key);
    } else {
      localStorage?.setItem(key, JSON.stringify(storageValue));
    }
  }, [key, storageValue]);

  return { storageValue, setStorageValue };
}

export { useLocalStorage, type UseLocalStorageType };
