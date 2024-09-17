import React, { useState } from "react";
import { cn } from "@/utils/cn";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  className,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange?.(newChecked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        isChecked
          ? "bg-blue-600 dark:bg-blue-400"
          : "bg-gray-200 dark:bg-gray-700",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        "dark:focus:ring-offset-gray-800",
        className,
      )}
      onClick={handleToggle}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-200 transition-transform",
          isChecked ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
};
