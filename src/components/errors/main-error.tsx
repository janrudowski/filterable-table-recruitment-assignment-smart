import React from "react";
import { FallbackProps } from "react-error-boundary";
import { Button } from "@/components/ui/button";

const MainError: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {error.message || "An unexpected error occurred."}
        </p>
        <Button onClick={resetErrorBoundary} className="w-full">
          Try again
        </Button>
      </div>
    </div>
  );
};

export default MainError;
