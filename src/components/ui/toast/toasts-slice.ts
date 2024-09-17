import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export type ToastType = "error" | "warning" | "info" | "default";

export interface Toast {
  id: string;
  header: string;
  content: string;
  type: ToastType;
}

interface ToastsState {
  toasts: Record<string, Toast>;
}

const initialState: ToastsState = {
  toasts: {},
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Omit<Toast, "id">>) => {
      const newToast: Toast = {
        ...action.payload,
        id: nanoid(),
      };
      state.toasts[newToast.id] = newToast;
    },
    removeToast: (state, action: PayloadAction<string>) => {
      delete state.toasts[action.payload];
    },
    clearAllToasts: (state) => {
      state.toasts = {};
    },
  },
});

export const { addToast, removeToast, clearAllToasts } = toastsSlice.actions;

export default toastsSlice.reducer;
