import type { Locale, SettingsState, Theme } from "../../types/settings.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: SettingsState = {
  locale: "en",
  theme: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload;
    },
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export const { setLocale, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
