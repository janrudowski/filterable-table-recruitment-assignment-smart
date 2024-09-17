import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary" | "error";
  inputSize?: "sm" | "md" | "lg";
  prependIcon?: ReactNode;
  appendIcon?: ReactNode;
  label?: string;
  errorMessage?: string;
  clear?: boolean;
  onClear?: () => void;
}

const variantStyles = {
  primary:
    "border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400",
  secondary:
    "border-gray-300 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:focus:border-green-400 dark:focus:ring-green-400",
  error:
    "border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-300 dark:focus:ring-red-300",
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export const Input: React.FC<InputProps> = ({
  className,
  variant = "primary",
  inputSize = "md",
  prependIcon,
  appendIcon,
  label,
  errorMessage,
  disabled,
  clear,
  onClear,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="relative flex flex-col">
      <div className="relative flex items-center">
        {prependIcon && (
          <div
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2",
              disabled && "opacity-50",
            )}
          >
            {prependIcon}
          </div>
        )}
        <input
          className={cn(
            "w-full rounded-md border bg-white transition-colors px-3 py-2",
            "focus:outline-none focus:ring-2",
            variantStyles[variant],
            sizeStyles[inputSize],
            prependIcon && "pl-10",
            (appendIcon || clear) && "pr-10",
            label && "pt-5",
            disabled && "bg-gray-100 text-gray-500 cursor-not-allowed",
            "dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400",
            "dark:disabled:bg-gray-700 dark:disabled:text-gray-500",
            className,
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          {...props}
        />
        {label && (
          <label
            className={cn(
              "absolute left-3 transition-all duration-200 pointer-events-none",
              isFocused || (props.value && props.value !== "")
                ? "top-1 text-xs"
                : "top-1/2 -translate-y-1/2 text-base",
              disabled && "text-gray-400",
              "dark:text-gray-300",
            )}
          >
            {label}
          </label>
        )}
        {clear && props.value && props.value !== "" && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            disabled={disabled}
          >
            <svg
              fill="none"
              height="15"
              viewBox="0 0 15 15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path d="m6.79289 7.5-3.14644-3.14645.7071-.7071 3.14645 3.14644 3.1464-3.14644.7072.7071-3.14649 3.14645 3.14649 3.1464-.7072.7072-3.1464-3.14649-3.14645 3.14649-.7071-.7072z" />
                <path d="m3.64645 3.64645c.19526-.19527.51184-.19527.7071 0l3.14645 3.14644 3.1464-3.14644c.1953-.19527.5119-.19527.7072 0 .1952.19526.1952.51184 0 .7071l-3.14649 3.14645 3.14649 3.1464c.1952.1953.1952.5119 0 .7072-.1953.1952-.5119.1952-.7072 0l-3.1464-3.14649-3.14645 3.14649c-.19526.1952-.51184.1952-.7071 0-.19527-.1953-.19527-.5119 0-.7072l3.14644-3.1464-3.14644-3.14645c-.19527-.19526-.19527-.51184 0-.7071z" />
              </g>
            </svg>
          </button>
        )}
        {appendIcon && !clear && (
          <div
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2",
              disabled && "opacity-50",
            )}
          >
            {appendIcon}
          </div>
        )}
      </div>
      {variant === "error" && errorMessage && (
        <p className="mt-1 text-sm text-red-500 dark:text-red-400">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
