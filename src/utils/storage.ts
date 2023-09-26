/** CORE */
import { StateStorage } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const APPStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};
