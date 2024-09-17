import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ErrorBoundary } from "react-error-boundary";
import { Toasts } from "@/components/ui/toast";
import { api } from "@/libs/api-client";
import { useToast } from "@/components/ui/toast/use-toast";
import { useDarkMode } from "./hooks";
import MainError from "@/components/errors/main-error";

type AppProviderProps = {
  children: React.ReactNode;
};

const AxiosInterceptor = ({ children }: AppProviderProps) => {
  const { showToast } = useToast();
  useEffect(() => {
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const message = error.response?.data?.message || error.message;
        showToast({
          header: "Error",
          content: message,
          type: "error",
        });
        return Promise.reject(error);
      },
    );
  }, []);

  return children;
};

const DarkModeProvider = ({ children }: AppProviderProps) => {
  useDarkMode();
  return children;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense fallback={<div>asd</div>}>
      <ErrorBoundary FallbackComponent={MainError}>
        <Provider store={store}>
          <DarkModeProvider>
            <Toasts />
            <AxiosInterceptor>{children}</AxiosInterceptor>
          </DarkModeProvider>
        </Provider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
