import { useState } from "react";

type StorageType = "localStorage" | "sessionStorage";

const useStorage = (storageType: StorageType = "localStorage") => {
  const [storage] = useState<Storage>(
    storageType === "localStorage" ? window.localStorage : window.sessionStorage
  );

  const get = <T,>(key: string): T | null => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error retrieving from ${storageType}:`, error);
      return null;
    }
  };

  const set = <T,>(key: string, value: T): void => {
    try {
      const serializedValue = JSON.stringify(value);
      storage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting ${key} in ${storageType}:`, error);
    }
  };

  const remove = (key: string): void => {
    try {
      storage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from ${storageType}:`, error);
    }
  };

  const clear = (): void => {
    try {
      storage.clear();
    } catch (error) {
      console.error(`Error clearing ${storageType}:`, error);
    }
  };

  return { get, set, remove, clear };
};

export default useStorage;
