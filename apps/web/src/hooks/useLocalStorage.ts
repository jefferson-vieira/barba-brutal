'use client';

import { useState } from 'react';

export default function useLocalStorage<T>(key: string) {
  const [storedValue, setStoredValue] = useState<null | T>(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  });

  const setValue = (value: T) => {
    if (typeof window === 'undefined') {
      return;
    }

    setStoredValue(value);

    if (!value) {
      localStorage.removeItem(key);

      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}
