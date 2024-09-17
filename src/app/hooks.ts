import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { useEffect } from "react";
import { toggleDarkMode as toggleDarkModeAction } from "@/features/dark-mode/store/dark-mode-slice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDarkMode = () => {
  const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useAppDispatch();

  if(isDarkMode) {
    document.documentElement.classList.add('dark')
    window.localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    window.localStorage.setItem('theme', 'light')
  }


  return {isDarkMode, toggleDarkMode: () => dispatch(toggleDarkModeAction())}

};