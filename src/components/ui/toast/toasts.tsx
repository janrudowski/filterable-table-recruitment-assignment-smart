import React from 'react';
import { useAppSelector } from '@/app/hooks';
import { Toast } from './toast';

export const Toasts: React.FC = () => {
  const toasts = useAppSelector((state) => state.toasts.toasts);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-4">
      {Object.values(toasts).map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};
