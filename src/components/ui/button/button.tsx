import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info';
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
    const baseStyles = 'px-4 py-2 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors px-4 py-2 rounded-md bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200';

    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
        success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
        info: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500',
    };

    return (
        <button
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}