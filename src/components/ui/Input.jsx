import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Input = React.forwardRef(({ className, error, ...props }, ref) => {
    return (
        <div className="w-full">
            <input
                ref={ref}
                className={twMerge(clsx(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all",
                    error
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:border-primary focus:ring-primary-light",
                    className
                ))}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
});

Input.displayName = "Input";
