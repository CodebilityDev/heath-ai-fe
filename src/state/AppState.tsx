import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

import { AppStateInterface } from "@/types/AppState";
import { defaultAppState } from "@/utils/Default";

const { persistAtom } = recoilPersist();

export const appStateAtom = atom({
  key: "appState",
  default: defaultAppState as AppStateInterface,
});
