import { useAppDispatch } from "@/app/hooks";
import { addToast, removeToast, type Toast } from "./toasts-slice";

export const useToast = () => {
  const dispatch = useAppDispatch();

  function showToast(options: Omit<Toast, "id">) {
    dispatch(addToast(options));
  }

  function hideToast(id: string) {
    dispatch(removeToast(id));
  }

  return { showToast, hideToast };
};
