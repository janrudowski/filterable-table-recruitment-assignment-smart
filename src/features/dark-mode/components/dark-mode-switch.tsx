import React from "react";
import { Switch } from "@/components/ui/switch";
import { useDarkMode } from "@/app/hooks";

export const DarkModeSwitch: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700"
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {isDarkMode ? "Dark" : "Light"} Mode
      </span>
    </div>
  );
};
