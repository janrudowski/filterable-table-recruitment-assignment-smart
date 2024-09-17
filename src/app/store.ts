import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@/features/users/store/users-slice";
import toastsReducer from "@/components/ui/toast/toasts-slice";
import darkModeReducer from "@/features/dark-mode/store/dark-mode-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    toasts: toastsReducer,
    darkMode: darkModeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
