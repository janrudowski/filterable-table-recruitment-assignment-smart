import React, { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import { Toast as ToastType } from './toasts-slice';
import { useToast } from './use-toast';

interface ToastProps {
  toast: ToastType;
}

const toastVariants = {
  error: 'bg-red-100 border-red-400 text-red-700',
  warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
  info: 'bg-blue-100 border-blue-400 text-blue-700',
  default: 'bg-gray-100 border-gray-400 text-gray-700',
};

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { hideToast } = useToast();

  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      hideToast(toast.id);
    }, 150);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'rounded-md border px-4 py-3 shadow-md relative cursor-pointer',
        toastVariants[toast.type],
        'animate-fade-left animate-ease-in animate-duration-100',
        isExiting && 'animate-fade-right animate-reverse animate-duration-100',
      )}
      role="alert"
      onClick={handleClose}
    >
      <div className="pr-8">
        <p className="font-bold">{toast.header}</p>
        <p className="text-sm">{toast.content}</p>
      </div>
    </div>
  );
};
