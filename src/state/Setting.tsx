import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

import { SettingInterface } from "@/types/Setting";

import { OpenAiAPIKeyInterface, ExcelExploreInterface } from "@/types/AppState";

import {
  defaultSetting,
  defaultOpenAiAPIKey,
  defaultExcelExplore,
} from "@/utils/Default";

const { persistAtom } = recoilPersist();

export const settingAtom = atom({
  key: "setting",
  default: defaultSetting as SettingInterface,
  effects_UNSTABLE: [persistAtom],
});

export const openAiAPIKeyAtom = atom({
  key: "openAiAPIKey",
  default: defaultOpenAiAPIKey as OpenAiAPIKeyInterface,
  effects_UNSTABLE: [persistAtom],
});

export const excelExploreAtom = atom({
  key: "excelExplore",
  default: defaultExcelExplore as ExcelExploreInterface,
  effects_UNSTABLE: [persistAtom],
});

export const oaKeySelector = selector({
  key: "openAiAPIKeySelector",
  get: ({ get }) => get(settingAtom).openAiAPIKey,
  set: ({ get, set }, newValue) => {
    const setting = get(settingAtom);
    set(settingAtom, { ...setting, openAiAPIKey: newValue });
  },
});

export const excelExploreSelector = selector({
  key: "excelExploreSelector",
  get: ({ get }) => get(settingAtom).excelExplore,
  set: ({ get, set }, newValue) => {
    const setting = get(settingAtom);
    set(settingAtom, { ...setting, excelExplore: newValue });
  },
});
